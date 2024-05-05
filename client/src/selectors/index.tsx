
// //REGISTRATION
export const selectorRegistrationIsLoading = (state) => state.registration.pageIsLoading;
export const selectorRegistrationModalSuccess = (state) => state.registration.modalSuccess;
export const selectorRegistrationModalError = (state) => state.registration.modalError;
export const selectorRegistrationInitialState = (state) => state.registration.formData;
export const selectorRegistrationMessageError = (state) => state.registration.messageError;


/* export const selectoRequestObj = state => state.app.requestObj */
// LOGIN
export const selectorIsLoading = (state) => state.logIn.loginPageIsLoading;
export const selectorAllLoginErrors = (state) => state.login.loginModalError;
export const selectorUserData = (state) => state.login.userData;
export const selectorToken = (state) => state.login.token;
export const selectorLoginModalError = (state) => state.login.loginModalError;






