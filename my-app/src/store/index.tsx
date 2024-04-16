import { configureStore } from '@reduxjs/toolkit';

import {
    logInReducer,
    personalOfficeReducer,
    registrationReducer
} from "../reducers";


const store = configureStore({
    reducer:{
        logIn: logInReducer,
        personalOffice: personalOfficeReducer,
        registration: registrationReducer,
    }

})

export default store;