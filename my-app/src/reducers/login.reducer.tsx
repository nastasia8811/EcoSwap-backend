import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import {LOGIN_USER, GET_USER} from '../endpoints';
import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken';

export interface LoginState {
    userData: object;
    token:string;
    modalError: string | null;
    modalSuccess: boolean | null;
    pageIsLoading: boolean;
    messageError: string;
}

export const initialState: LoginState = {
    userData: {
        login:"",
        password:""
    },
    token: localStorage.getItem("token") || '',
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: ""
};


const loginSlice:Slice<LoginState> = createSlice({
    name: 'login',
    initialState,
    reducers: {

        actionAuthorizationUser: (state, action: PayloadAction<object>) => {
            state.userData = action.payload
        },

        actionPageIsLoading: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionToken: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.token = action.payload
        },
        actionLoginError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },
        actionMessageError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
    },
});

export const { actionToken,actionAuthorizationUser, actionLoginSuccess, actionPageIsLoading, actionLoginError, actionMessageError} = loginSlice.actions;

export const loginUserApi = (value: any) => (dispatch: any) => {
    dispatch(actionPageIsLoading(true));
    return axios
        .post(LOGIN_USER, value)
        .then((response) => {
            const { token } = response.data;
            dispatch(actionToken(token));
            setAuthToken(token);
        })
        .catch((error) => {
            dispatch(actionMessageError(error.response.data.message))
            dispatch(actionLoginError(true))
        }).finally(() => {
            dispatch(actionPageIsLoading(false))
        })
};

export const actionFetchAuthorizationUser = () => (dispatch) => {
    return axios.get(GET_USER)
        .then(user => {
            dispatch(actionLoginSuccess(user.data))
        })
}