import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { LOGIN_USER, GET_USER } from '../endpoints';
import axios from 'axios';

export interface LoginState {
    loginPageIsLoading: boolean;
    userData: object;
    loginMassageError: string | null;
    modalError: string | null;
}

export const initialState: LoginState = {
    userData: {
        login: "",
        password: ""
    },
    loginPageIsLoading: false,
    loginMassageError: null,
    modalError: null,
};

const loginSlice: Slice<LoginState> = createSlice({
    name: 'login',
    initialState,
    reducers: {
        actionPageIsLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.loginPageIsLoading = action.payload;
        },
        actionUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload;
        },
        actionLoginMassageError: (state, action: PayloadAction<string>) => {
            state.loginMassageError = action.payload;
        },
        actionLoginError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },
    }
});

export const {
    actionPageIsLoadingLogin,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
} = loginSlice.actions;

export const sendApiLogin = (value: { login: string; password: string }) => (dispatch: any) => {
    console.log('Sending login request with value:', value);  // Логирование отправляемых данных
    dispatch(actionPageIsLoadingLogin(true));

    const loginData = {
        loginOrEmail: value.login,
        password: value.password
    };
    
    return axios
        .post(LOGIN_USER, loginData)
        .then((response) => {
            console.log('Login response:', response);  //  ответ
            dispatch(actionUserData(response.data));
            return response;
        })
        .catch((error) => {
            console.error('Login error:', error);  //  ошибка
            if (error.response) {
                console.error('Error response data:', error.response.data);  //  данные ошибки
                dispatch(actionLoginMassageError(error.response.data.message));
            } else {
                dispatch(actionLoginMassageError('An unknown error occurred.'));
            }
            dispatch(actionLoginError(true));
        }).finally(() => {
            dispatch(actionPageIsLoadingLogin(false));
        });
};

export const getUserApi = (value:any)=>(dispatch:any)=> {
    return axios
        .get(GET_USER, value)
        .then((getUser=>{dispatch(true)
            return getUser;
        }))
        .catch((error)=>{
            dispatch(actionLoginMassageError(error.response.data.message))
            dispatch(actionLoginError(true))
        })
                .finally(() => {
                    dispatch(actionPageIsLoadingLogin(false))
                })
}

export default loginSlice.reducer;
