import { configureStore } from '@reduxjs/toolkit';

import {
    registrationReducer,
    loginReducer,
    accountReducer,
    eventCreateReducer
    //authorizationReducer
} from "../reducers";



const store = configureStore({
    reducer:{
        registration: registrationReducer,
        login: loginReducer,
        account: accountReducer,
        eventCreate: eventCreateReducer,
        // authorization: authorizationReducer,
    }
    

})

export default store;