
import { RegistrationState } from "../reducers/registration.reducer"
import {LoginState} from '../reducers/login.reducer'
import{AccountState} from '../reducers/account.reducer'
import {EventCreateState} from '../reducers'



interface AppState {
    registration: RegistrationState;
    login: LoginState;
    account: AccountState;
    eventCreate: EventCreateState;
    //authorization: AuthorizationState;
    //eventItem: EventItemState;
}

// //REGISTRATION
export const selectorRegistrationIsLoading = (state: AppState) => state.registration.pageIsLoading;
export const selectorRegistrationModalSuccess = (state: AppState) => state.registration.modalSuccess;
export const selectorRegistrationModalError = (state: AppState) => state.registration.modalError;
export const selectorRegistrationInitialState = (state: AppState) => state.registration.formData;
export const selectorRegistrationMessageError = (state: AppState) => state.registration.messageError;

//EVENTItem
//export const selectorEventItemTitle = (state: AppState) => state.eventItem.date;


//LOGIN

export const selectorLoginIsLoading = (state: AppState) => state.login.loginPageIsLoading;

//export const selectLoginUserData = (state: AppState) => state.login.userData;
export const selectorMassageError = (state: AppState) => state.login.loginMessageError;
export const selectorLoginModalError = (state: AppState) => state.login.modalError;
export const selectorLoginToken = (state: AppState) => state.login.loginToken;

//MY ACCAUNT
export const selectorAccountIsLoading = (state: AppState) => state.account.accountPageIsLoading;
export const selectorAccountGetCreatedEvents = (state: AppState) => state.account.accountGetCreatedEvents;
export const selectorAccountGetRegisterEvents = (state: AppState) => state.account.accountGetRegisterEvents;
export const selectorAccountChangeCreatedEvent = (state: AppState) => state.account.accountChangeCreatedEvent;
export const selectorAccountDeleteCreatedEvent = (state: AppState) => state.account.accountDeleteCreatedEvent;
export const selectorAccountUnregisterEvents = (state: AppState) => state.account.accountUnregisterEvents;
export const selectorAccountError = (state: AppState) => state.account.accountError;


// EVENTECREATE
export const selectorCreatingEventIsLoading = (state: AppState) => state.eventCreate.pageIsLoading;
export const selectorCreatingEventModalSuccess = (state: AppState) => state.eventCreate.modalSuccess;
export const selectorCreatingEventModalError = (state: AppState) => state.eventCreate.modalError;
export const selectorCreatingEventInitialState = (state: AppState) => state.eventCreate.formData;
export const selectorCreatingEventMessageError = (state: AppState) => state.eventCreate.messageError;

//AUTHORIZATION
// export const selectorAuthorizationIsLoading = (state: AppState) => state.authorization.authorizationPageIsLoading;
// export const selectorAuthorizationSuccesNewIcon = (state: AppState) => state.authorization.authorizationSuccesNewIcon;
// //export const selectorAuthorizationSuccesGetCustomer = (state: AppState) => state.authorization.authorizationSuccesGetCustomer;
// export const selectorAuthorizationMassageError = (state: AppState) => state.authorization.authorizationMassageError;
// export const selectorAuthorizationModalError = (state: AppState) => state.authorization.authorizationModalError;



