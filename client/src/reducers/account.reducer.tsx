import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
// import {  GET_USER } from '../endpoints';
// import axios from 'axios';

export interface AccountState {
    accountPageIsLoading: boolean;

}

export const initialState: AccountState = {
 
    accountPageIsLoading: false,

};

const accountSlice: Slice<AccountState> = createSlice({
    name: 'account',
    initialState,
    reducers: {
        actionPageIsLoadingAccount: (state, action: PayloadAction<boolean>) => {
            state.accountPageIsLoading = action.payload;
        },
    
    }
});

export const {
    actionPageIsLoadingAccount,

} = accountSlice.actions;

// export const sendApiLogin = (value: { login: string; password: string }) => (dispatch: any) => {
//     console.log('Sending login request with value:', value);  // Логирование отправляемых данных
//     dispatch(actionPageIsLoadingLogin(true));

    
//     return axios
//         .post(LOGIN_USER, loginData)
//         .then((response) => {
//             console.log('Login response:', response);  //  ответ
//             dispatch(actionUserData(response.data));
//             return response;
//         })
//         .catch((error) => {
//             console.error('Login error:', error);  //  ошибка
//             if (error.response) {
//                 console.error('Error response data:', error.response.data);  //  данные ошибки
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
