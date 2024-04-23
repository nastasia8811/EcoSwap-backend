
// //REGISTRATION
export const selectorRegistrationIsLoading = (state) => state.registration.pageIsLoading;
export const selectorRegistrationModalSuccess = (state) => state.registration.modalSuccess;
export const selectorRegistrationModalError = (state) => state.registration.modalError;
export const selectorRegistrationInitialState = (state) => state.registration.formData;
export const selectorRegistrationMessageError = (state) => state.registration.messageError;




export const selectorServerErrorCheckout = (state) => state.checkout.serverError;
export const selectorPageLoadingPersonalOffice = state => state.personalOffice.pageLoading 
export const selectorAllUserOrders = state => state.personalOffice.allUserOrders 
export const selectorEditInputsOrder = state => state.personalOffice.editInputsOrder
export const selectorOrderInfo = state => state.personalOffice.orderInfo
export const selectorServerErrorPersonalOffice = state => state.personalOffice.serverError

/* export const selectoRequestObj = state => state.app.requestObj */
// LOGIN
export const selectorAllLoginErrors = (state) => state.logIn.error;
export const selectorUserData = (state) => state.logIn.userData;
export const selectorToken = (state) => state.logIn.token;






