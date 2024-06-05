import registrationReducer, {
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError
} from './registration.reducer';

import loginReducer, {
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin,
    getUserApi
} from './login.reducer';

import accountReducer,{
    actionPageIsLoadingAccount
} from './account.reducer'; 

import eventCreateReducer,{
    EventCreateState,
    actionPageIsLoadingCreatingEvent,
    actionCreatingEventSuccess,
    actionCreatingEventError
} from './eventCreate.reducer';

// import authorizationReducer,{
//     actionPageIsLoadingAuthorization,
//     actionAuthorizationSuccesNewIcon,
//     actionAuthorizationMassageError,
//     actionAuthorizationError,
//     authorizationSuccess
// } from './authorization.reducer'; 

export {
    registrationReducer,
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError,
    loginReducer,
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin,
    getUserApi,
    accountReducer,
    actionPageIsLoadingAccount,
    EventCreateState,
    eventCreateReducer,
    actionPageIsLoadingCreatingEvent,
    actionCreatingEventSuccess,
    actionCreatingEventError,
    // authorizationReducer,
    // actionPageIsLoadingAuthorization,
    // actionAuthorizationSuccesNewIcon,
    // actionAuthorizationMassageError,
    // actionAuthorizationError,
    // authorizationSuccess
};
