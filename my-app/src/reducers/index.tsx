import personalOfficeReducer, {
    actionEditInputsOrder,
    actionEditInputs,
    actionFetchUpdateCustomer
} from "./personalOffice.reducer";

import registrationReducer, {
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError
} from './registration.reducer';

import logInReducer, {
    actionFetchLogin,
    actionToken,
    actionFetchAuthorizationUser,
    actionResetLoginError,
    actionAuthorizationUser,
} from './logIn.reducer';

export {
    actionEditInputs,
    actionFetchUpdateCustomer,
    actionEditInputsOrder,
    registrationReducer,
    createCustomerServerApi,
    actionRegistrationSuccess,
    actionPageIsLoading,
    actionRegistrationError,
    initialState,
    actionMessageError,
    personalOfficeReducer,
    logInReducer,
    actionFetchLogin,
    actionToken,
    actionFetchAuthorizationUser,
    actionResetLoginError,
    actionAuthorizationUser,

};
