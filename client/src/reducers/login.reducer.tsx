import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import {LOGIN_USER, GET_USER} from '../endpoints';
import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken';



export interface LoginState {
    pageIsLoading:boolean;
    userData: object;
    token:string;
    loginMassageError: string;
    modalError:string;
}

export const initialState: LoginState = {
    userData : {
        loginOrEmail: "",
        password: ""
    },
    pageIsLoading: false,
    token: localStorage.getItem("token") || '',
    loginMassageError: null,
    modalError: null,
};


const loginSlice:Slice<LoginState> = createSlice({
    name: 'login',
    initialState,
    reducers: {

        actionPageIsLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },

        actionToken: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
        },
        actionUserData:(state, action: PayloadAction<object>) => {
            state.userData = action.payload;
        },
        actionLoginError: (state, action: PayloadAction<string>) => {
            state.modalError = action.payload;
        },

        actionLoginMassageError: (state, action: PayloadAction<string>) => {
            state.loginMassageError = action.payload;
        }
}});


export const {
    actionPageIsLoadingLogin,
    actionToken,
    actionUserData,
    actionLoginError,
    actionLoginMassageError,
} = loginSlice.actions

export const sendApiLogin = (value: any) => (dispatch: any) => {
    dispatch(actionPageIsLoadingLogin(true));
    return axios
        .post(LOGIN_USER, value)
        .then((loginUser) => {
            dispatch(actionUserData(true));
            console.log(loginUser)
            return loginUser;
        })
        .catch((error) => {
            dispatch(actionLoginMassageError(error.response.data.message))
            dispatch(actionLoginError(true))
        }).finally(() => {
            dispatch(actionPageIsLoadingLogin(false))
        })
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

export default loginSlice.reducer

