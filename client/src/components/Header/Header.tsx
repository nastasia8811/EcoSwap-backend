import { Box, Container } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import {logo} from "./icons";
import {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = () => {

        console.log("hi")
    }

    return (
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__wrapper-logo">
                        <Link to="/" className="logo">
                            {logo}
                        </Link>
                    </Box>
                    <Box className="header__wrapper-menu">
                        <NavLink to="/about" className="header__wrapper-menu-item">
                            About us
                        </NavLink>
                        <NavLink to="/blog" className="header__wrapper-menu-item">
                            Blog
                        </NavLink>
                        <NavLink to="/events" className="header__wrapper-menu-item">
                            Events
                        </NavLink>
                        <NavLink to="/authorization" className="header__wrapper-menu-item" onClick={handleClick}>
                            authorization
                        </NavLink>
                    </Box>
                    <Box className="header__wrapper-burger_btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                    </Box>
                </Box>

            </Container>
        </header>
    );
};
export default Header;