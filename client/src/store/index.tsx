import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer,
    loginReducer,
    accountReducer,
    authorizationReducer
} from "../reducers";



const store = configureStore({
    reducer:{
        registration: registrationReducer,
        login: loginReducer,
        account: accountReducer,
        authorization: authorizationReducer,
    }
    

})

export default store;