import registrationReducer, {
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError
} from './registration.reducer';

import loginReducer, {
    actionFetchLogin,
    actionToken,
    actionFetchAuthorizationUser,
    actionResetLoginError,
    actionAuthorizationUser,
} from './login.reducer';
export {
    registrationReducer,
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError,
    loginReducer,
    actionFetchLogin,
    actionToken,
    actionFetchAuthorizationUser,
    actionResetLoginError,
    actionAuthorizationUser,
};
