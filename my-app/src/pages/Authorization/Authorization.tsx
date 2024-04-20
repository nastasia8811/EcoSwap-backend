import './Authorization.scss';
import {Box, Container} from '@mui/material';
import {Link} from "react-router-dom";
import Registration from "../Registration/Registration";

const Authorization = () => {
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
                            <form className="auth__background-bottom_container-content"></form>
                            <span>or</span>
                            <p className=""><Link to="/registration" className="registration">
                                <Registration/>
                            </Link></p>
                        </div>
                    </Box>
                </Container>

            </Box>
        </>
    )
};

export default Authorization;