import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer,
    loginReducer,
} from "../reducers";


const store = configureStore({
    reducer:{
        registration: registrationReducer,
        login: loginReducer
    }

})

export default store;