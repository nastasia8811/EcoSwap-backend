
// //REGISTRATION
export const selectorRegistrationIsLoading = (state) => state.registration.pageIsLoading;
export const selectorRegistrationModalSuccess = (state) => state.registration.modalSuccess;
export const selectorRegistrationModalError = (state) => state.registration.modalError;
export const selectorRegistrationInitialState = (state) => state.registration.formData;
export const selectorRegistrationMessageError = (state) => state.registration.messageError;


/* export const selectoRequestObj = state => state.app.requestObj */
// LOGIN
export const selectorIsLoading = (state) => state.login.loginPageIsLoading;
export const selectorAllLoginErrors = (state) => state.login.loginModalError;
export const selectorUserData = (state) => state.login.userData;
export const selectorToken = (state) => state.login.token;
//export const selectorLoginModalError = (state) => state.login.loginModalError;


//log 2

export const selectorLoginIsLoading = (state) => state.login.loginPageIsLoading;
export const selectorLoginToken = (state) => state.login.token;
export const selectorLoginUserData = (state) => state.login.userData;
export const selectorLoginError = (state) => state.login.loginMassageError;
export const selectorLoginModalError = (state) => state.registration.modalError;
export const selectorError = (state) => state.registration.error;

