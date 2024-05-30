
import { RegistrationState } from "../reducers/registration.reducer"
import{LoginState} from '../reducers/login.reducer'

interface AppState {
    registration: RegistrationState;
    login: LoginState;
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


//log 2

export const selectorLoginIsLoading = (state: AppState) => state.login.loginPageIsLoading;
export const selectorLoginUserData = (state: AppState) => state.login.userData;
export const selectorMassageError = (state: AppState) => state.login.loginMassageError;
export const selectorLoginModalError = (state: AppState) => state.login.modalError;


