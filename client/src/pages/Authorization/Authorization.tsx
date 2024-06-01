import './Authorization.scss';
import { Box, Container } from '@mui/material';
import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import validationSchemaLogin from "../Authorization/ValidationSchemaLogin";
import { useDispatch, useSelector } from "react-redux";
import { selectorLoginIsLoading, selectorLoginUserData, selectorLoginModalError } from "../../selectors";
import Preloader from "../../components/Preloader/Preloader";
import * as React from "react";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { sendApiLogin, actionLoginError } from "../../reducers";
import ModalLoginError from './modalLoginError/ModalErrorRegistration/ModalLoginError';

const Authorization: React.FC = () => {
    const userData = useSelector(selectorLoginUserData);
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const loading = useSelector(selectorLoginIsLoading);
    const modalError = useSelector(selectorLoginModalError);


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
                                validationSchema={validationSchemaLogin}
                                onSubmit={(values) => dispatch(sendApiLogin(values)).then((axiosValue) => {
                                 return axiosValue
                                })
                                }
                            />
                            {loading && <Preloader open />}
                        
                            {modalError && <ModalLoginError closeErrorModal={() => dispatch(actionLoginError(false))} />}
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
