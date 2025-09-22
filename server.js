// server.js
// ⚙️ Базовий експрес-сервер з сучасним підключенням до MongoDB Atlas через Mongoose

require('dotenv').config(); // 1) підтягуємо .env якомога раніше

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// ❗ body-parser вже вбудований у Express з v4.16+ — окремий пакет не потрібен
// const bodyParser = require('body-parser');

const evntsList = require('./routes/event');
const customers = require('./routes/customers');
const products = require('./routes/products');
const globalConfigs = require('./routes/globalConfigs');

const app = express();

/* ----------------------------- CORS ----------------------------- */
// У dev дозволяємо localhost:3000 і запити без Origin (наприклад, Postman)
const allowedOrigins = new Set(['http://localhost:3000']);

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}));

/* --------------------------- Parsers ---------------------------- */
// Вбудовані парсери Express замість body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ------------------------ MongoDB URI --------------------------- */
// Рекомендується зберігати URI у .env: MONGODB_URI="mongodb+srv://..."
// Якщо в тебе є ./config/keys.js — можеш залишити підстраховку.
const envUri = process.env.MONGODB_URI;
const keysUri = (() => {
    try {
        return require('./config/keys').mongoURI;
    } catch {
        return null;
    }
})();
const MONGO_URI = envUri || keysUri;

if (!MONGO_URI) {
    console.error('❌ MONGODB_URI не знайдено. Додай його у .env або ./config/keys.js');
    process.exit(1);
}

/* -------------------- Підключення до MongoDB -------------------- */
// ВАЖЛИВО: жодних useNewUrlParser/useUnifiedTopology/useFindAndModify/useCreateIndex — це все застаріло
async function connectMongo() {
    try {
        await mongoose.connect(MONGO_URI, {
            // тримаємо короткий таймаут вибору сервера, щоб швидше бачити помилки мережі/DNS
            serverSelectionTimeoutMS: 10000,
            // autoIndex: true // за потреби в dev; у проді краще керувати індексами явно
        });
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ Mongo connect error:', err);
        process.exit(1);
    }
}
connectMongo();

// Якщо треба: логувати втрату/відновлення з’єднання
mongoose.connection.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));
mongoose.connection.on('reconnected', () => console.log('🔁 MongoDB reconnected'));

/* --------------------------- Passport -------------------------- */
app.use(passport.initialize());
require('./config/passport')(passport);

/* ---------------------------- Routes --------------------------- */
app.use('/api/event', evntsList);
app.use('/api/customers', customers);
app.use('/api/configs', globalConfigs);
app.use('/api/products', products);

// проста перевірка живості
app.get('/health', (req, res) => res.json({ ok: true }));

/* -------------------------- Static (prod) ----------------------- */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

/* ----------------------------- Start --------------------------- */
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});

// Акуратне завершення (Ctrl+C / SIGTERM)
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
    console.log('\n⏳ Shutting down...');
    server.close(() => {
        mongoose.connection.close(false, () => {
            console.log('👋 Bye!');
            process.exit(0);
        });
    });
}
