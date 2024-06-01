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
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin
} from './login.reducer';

import accountReducer,{
    actionPageIsLoadingAccount
} from './account.reducer'; 

import authorizationReducer,{
    actionPageIsLoadingAuthorization,
    actionAuthorizationSuccesNewIcon,
    actionAuthorizationMassageError,
    actionAuthorizationError,
    authorizationSuccess
} from './authorization.reducer'; 

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
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
    sendApiLogin,
    accountReducer,
    actionPageIsLoadingAccount,
    authorizationReducer,
    actionPageIsLoadingAuthorization,
    actionAuthorizationSuccesNewIcon,
    actionAuthorizationMassageError,
    actionAuthorizationError,
    authorizationSuccess
};
