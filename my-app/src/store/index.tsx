import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer
} from "../reducers";


const store = configureStore({
    reducer:{

        registration: registrationReducer,
    }

})

export default store;