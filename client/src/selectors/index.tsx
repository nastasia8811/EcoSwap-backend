
import { RegistrationState } from "../reducers/registration.reducer"
import{LoginState} from '../reducers/login.reducer'
import{AccountState} from '../reducers/account.reducer'
import{AuthorizationState} from '../reducers/authorization.reducer'

interface AppState {
    registration: RegistrationState;
    login: LoginState;
    account: AccountState;
    authorization: AuthorizationState;
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
export const selectorLoginUserData = (state: AppState) => state.login.userData;
export const selectorMassageError = (state: AppState) => state.login.loginMassageError;
export const selectorLoginModalError = (state: AppState) => state.login.modalError;

//MY ACCAUNT
export const selectorAccountIsLoading = (state: AppState) => state.account.accountPageIsLoading;

//AUTHORIZATION
export const selectorAuthorizationIsLoading = (state: AppState) => state.authorization.authorizationPageIsLoading;
export const selectorAuthorizationSuccesNewIcon = (state: AppState) => state.authorization.authorizationSuccesNewIcon;
export const selectorAuthorizationMassageError = (state: AppState) => state.authorization.authorizationMassageError;
export const selectorAuthorizationModalError = (state: AppState) => state.authorization.authorizationModalError;


