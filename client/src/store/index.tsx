import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer,
    loginReducer,
    accountReducer
} from "../reducers";



const store = configureStore({
    reducer:{
        registration: registrationReducer,
        login: loginReducer,
        account: accountReducer,
    }

})

export default store;