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
} from './login.reducer';

import accountReducer,{
    actionPageIsLoadingAccount
} from './account.reducer'; 

import authorizationSlice,{
    actionPageIsLoadingAuthorization,
    actionAuthorizationSuccesNewIcon,
    actionAuthorizationMassageError,
    actionAuthorizationError
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
    accountReducer,
    actionPageIsLoadingAccount,
    authorizationSlice,
    actionPageIsLoadingAuthorization,
    actionAuthorizationSuccesNewIcon,
    actionAuthorizationMassageError,
    actionAuthorizationError
};
