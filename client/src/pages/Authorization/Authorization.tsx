import './Authorization.scss';
import {Box, Container} from '@mui/material';
import {Link} from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import validationSchemaLogin from "../Authorization/ValidationSchemaLogin";
import {useDispatch, useSelector} from "react-redux";
import {selectorToken,selectorUserData} from "../../selectors";
//import Preloader from "../../components/Preloader/Preloader";
import * as React from "react";
import {actionFetchAuthorizationUser, actionFetchLogin} from "../../reducers";

import {useEffect} from 'react';
import setAuthToken from '../../helpers/setAuthToken';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import store from "../../store";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
//import ModalErrorRegistration from "../Registration/components/ModalErrorRegistration/ModalErrorRegistration";




const Authorization: React.FC = () => {
    const userData = useSelector(selectorUserData);
    const authToken = useSelector(selectorToken);
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

    useEffect(() => {
        setAuthToken(authToken);
        if (authToken) {
            dispatch(actionFetchAuthorizationUser()).then(r => {
                console.log("actionFetchAuthorizationUser");});
        }
    }, [authToken]);


    const handleSubmit = async (values) => {
        await dispatch(actionFetchLogin(values))
        const state = store.getState()
        const error = state.login.error;

        if(!error) {

            console.log("error")
        }
    }



    return (
        <>
            <Box className="auth">

                <Container maxWidth="xl">
                    <div className="auth__background-top">

                    </div>
                    <div className="auth__content-container">
                        <div className="auth__content-container_text1">
                            Authorization
                        </div>
                    </div>

                    <Box className="auth__background-bottom">
                        <BreadCrumbs linksArray={[{ link: '/authorization', text: 'Authorization' }]} />
                        <div className="auth__background-bottom_container">
                        <FormLogin
                            initialValues={userData}
                            onSubmit={ (values) => handleSubmit(values) }
                            validationSchema={validationSchemaLogin}
                        />

                            <span className="auth__background-bottom_container-span">or</span>

                            <Link to="/registration" className="auth__background-bottom_container-registration"> Create account </Link>
                        </div>

                    </Box>
                </Container>

            </Box>
        </>
    )
};

export default Authorization;