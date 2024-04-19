import { Box, Container,TextField } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import {logo, circum} from "./icons";


const Header = () => {

    return (
    <>
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__logo-wrapper">
                        <Link to="/" className="logo">
                            {logo}
                        </Link>
                    </Box>

                    <Box className="header-menu__input-wrapper">
                        <Box className="header-menu__input-search">
                            {circum}
                        </Box>
                    </Box>

                </Box>

            </Container>
        </header>
    </>
);
};
export default Header;