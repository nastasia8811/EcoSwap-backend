
import { Box } from '@mui/material';
//import { ThemeProvider,createTheme } from '@mui/material/styles';

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import * as React from "react";
//import { defaultTheme } from '../../assets/theme/theme';

const Layout: React.FC = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate('/authorization');
    }, [token, navigate]);

    if (token) {
        return (
            // <ThemeProvider theme={defaultTheme}>
            <>
                <Box display="flex" sx={{ flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />
                    <Box sx={{ flex: '1 1 auto' ,position:"relative"}}>
                        <Outlet />
                    </Box>
                    <Footer />
                </Box>
            {/*</ThemeProvider>*/}
    </>

        );
    }
    return null;
};
export default Layout;