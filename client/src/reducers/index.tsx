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
    // authorizationReducer,
    // actionPageIsLoadingAuthorization,
    // actionAuthorizationSuccesNewIcon,
    // actionAuthorizationMassageError,
    // actionAuthorizationError,
    // authorizationSuccess
};
