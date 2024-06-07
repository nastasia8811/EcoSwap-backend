import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
// import {  GET_USER } from '../endpoints';
// import axios from 'axios';

export interface AccountState {
    accountPageIsLoading: boolean;
    accountGetCreatedEvents:object,
    accountGetRegisterEvents: object,
    accountChangeCreatedEvent:object,
    accountDeleteCreatedEvent:boolean,
    accountUnregisterEvents:boolean,
    accountError:null,
}

export const initialState: AccountState = {
 
    accountPageIsLoading: false,
    accountGetCreatedEvents:{},
    accountGetRegisterEvents: {},
    accountChangeCreatedEvent:{},
    accountDeleteCreatedEvent:false,
    accountUnregisterEvents:false,
    accountError: null
};

const accountSlice: Slice<AccountState> = createSlice({
    name: 'account',
    initialState,
    reducers: {
        actionPageIsLoadingAccount: (state, action: PayloadAction<boolean>) => {
            state.accountPageIsLoading = action.payload;
        },
        actionGetCreatedEventsAccount: (state, action: PayloadAction<object>) => {
            state.accountGetCreatedEvents= action.payload;
        },
        actionGetRegisterEventsAccount: (state, action: PayloadAction<object>) => {
            state.accountGetRegisterEvents = action.payload;
        },
        actionChangeCreatedEventAccount: (state, action: PayloadAction<object>) => {
            state.accountChangeCreatedEvent = action.payload;
        },
        actionDeleteCreatedEventAccount: (state, action: PayloadAction<boolean>) => {
            state.accountDeleteCreatedEvent = action.payload;
        },
        actionUnregisterEventAccount: (state, action: PayloadAction<boolean>) => {
            state.accountUnregisterEvents = action.payload;
        },
        actionAccountError: (state, action: PayloadAction<null>) => {
            state.accountError = action.payload;
        },
    
    }
});

export const {
    actionPageIsLoadingAccount,

} = accountSlice.actions;

// export const sendApiLogin = (value: { login: string; password: string }) => (dispatch: any) => {
//     console.log('Sending login request with value:', value);
//     dispatch(actionPageIsLoadingLogin(true));

    
//     return axios
//         .post(LOGIN_USER, loginData)
//         .then((response) => {
//             console.log('Login response:', response);
//             dispatch(actionUserData(response.data));
//             return response;
//         })
//         .catch((error) => {
//             console.error('Login error:', error);
//             if (error.response) {
//                 console.error('Error response data:', error.response.data);
//                 dispatch(actionLoginMassageError(error.response.data.message));
//             } else {
//                 dispatch(actionLoginMassageError('An unknown error occurred.'));
//             }
//             dispatch(actionLoginError(true));
//         }).finally(() => {
//             dispatch(actionPageIsLoadingLogin(false));
//         });
//};



export default accountSlice.reducer;
