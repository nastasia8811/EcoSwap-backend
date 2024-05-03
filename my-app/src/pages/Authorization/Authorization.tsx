import './Authorization.scss';
import {Box, Container} from '@mui/material';
import {Link} from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import ValidationSchema from "../Registration/ValidationSchemaRegistration";
import {useDispatch, useSelector} from "react-redux";
import {selectorUserData,selectorIsLoading,selectorToken} from "../../selectors";
import Preloader from "../../components/Preloader/Preloader";
import * as React from "react";
import {actionFetchAuthorizationUser} from "../../reducers/login.reducer";

import {useEffect} from 'react';
import setAuthToken from '../../helpers/setAuthToken';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";




const Authorization: React.FC = () => {
    const initialUserData = useSelector(selectorUserData);
    const loading = useSelector(selectorIsLoading);
    const authToken = useSelector(selectorToken);
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    useEffect(() => {
        setAuthToken(authToken);
        if (authToken) {
            dispatch(actionFetchAuthorizationUser());
        }
    }, [authToken]);
    return (
        <>
            <Box className="auth">
                <Container maxWidth="xl">
                    <div className="auth__background-top">

                    </div>
                    <div className="auth__content-container">
                        <div className="auth__content-container_text1">
                            Sign up
                        </div>
                    </div>

                    <Box className="auth__background-bottom">
                        <div className="auth__background-bottom_container">
                        <FormLogin
                            initialValues={initialUserData}
                            validationSchema={ValidationSchema}
                            onSubmit={(values => {
                                dispatch(actionFetchAuthorizationUser()).then(() => {
                                    console.log("hi");
                                }).catch((error) => {
                                    console.error("Error occurred:", error);
                                });
                            })}

                        />
                            {loading && <Preloader open />}

                            <span>or</span>

                            <Link to="/registration" className="registration"> Create</Link>
                        </div>
                    </Box>
                </Container>

            </Box>
        </>
    )
};

export default Authorization;