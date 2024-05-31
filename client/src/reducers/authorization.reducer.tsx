import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import {  GET_USER } from '../endpoints';
import axios from 'axios';

export interface AuthorizationState {
    authorizationPageIsLoading: boolean;
    authorizationSuccesNewIcon: boolean;
    authorizationMassageError: string | null;
    authorizationModalError: string | null;

}

export const initialState: AuthorizationState = {

    authorizationPageIsLoading: false,
    authorizationSuccesNewIcon: false,
    authorizationMassageError: null,
    authorizationModalError: null,
};

const authorizationSlice: Slice<AuthorizationState> = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        actionPageIsLoadingAuthorization: (state, action: PayloadAction<boolean>) => {
            state.authorizationPageIsLoading = action.payload;
        },
        actionAuthorizationSuccesNewIcon:(state, action: PayloadAction<boolean>) =>{
            state.authorizationSuccesNewIcon = action.payload;
        },
        actionAuthorizationMassageError: (state, action: PayloadAction<string>) => {
            state.authorizationMassageError = action.payload;
        },
        actionAuthorizationError: (state, action: PayloadAction<string>) => {
            state.authorizationModalError = action.payload;
        },
    
    }
});

export const {
    actionPageIsLoadingAuthorization,
    actionAuthorizationSuccesNewIcon,
    actionAuthorizationMassageError,
    actionAuthorizationError
} = authorizationSlice.actions;

    
export const AuthorizationSuccess = (value:any)=>(dispatch:any)=> {
    return axios
        .get(GET_USER, value)
        .then((getUser=>{dispatch(true)
            return getUser;
        }))
        .catch((error)=>{
            dispatch(actionAuthorizationMassageError(error.response.data.message))
            dispatch(actionAuthorizationError(true))
        })
                .finally(() => {
                    dispatch(actionPageIsLoadingAuthorization(false))
                })
}



export default authorizationSlice.reducer;
