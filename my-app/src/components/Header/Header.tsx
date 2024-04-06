import { Box, Container } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

return (
    <>
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__logo-wrapper">
                        <Link to="/" className="logo">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#1B2A20"/>
                            <path
                                d="M71 40C71 55.3736 57.2157 68 40 68C22.7843 68 9 55.3736 9 40C9 24.6264 22.7843 12 40 12C57.2157 12 71 24.6264 71 40Z"
                                stroke="#8BA993" stroke-width="2"/>
                            <path
                                d="M63.5 40.0005C63.5 50.6578 53.0467 59.5947 39.75 59.5947C26.4533 59.5947 16 50.6578 16 40.0005C16 29.3431 26.4533 20.4062 39.75 20.4062C53.0467 20.4062 63.5 29.3431 63.5 40.0005Z"
                                stroke="#8BA993" stroke-width="2"/>
                            <rect x="20" y="32" width="52" height="9" fill="#1B2A20"/>
                            <rect x="20" y="41" width="48" height="7" fill="#1B2A20"/>
                            <rect x="2" y="42" width="13" height="9" fill="#1B2A20"/>
                            <rect x="8" y="40" width="64" height="2" fill="#8BA993"/>
                        </svg>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </header>
    </>
);
};
export default Header;