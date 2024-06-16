import { Box, Container } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { logo } from "./icons";
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {selectorLoginToken} from "../../selectors";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {actionResetState} from "../../reducers";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isUserAuthorized = useSelector(selectorLoginToken)
const dispatch = useDispatch()
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

                        <NavLink to="/events" className="header__wrapper-menu-item">
                            Events
                        </NavLink>
                        <NavLink to="/authorization" className="header__wrapper-menu-item" onClick = {()=>{localStorage.removeItem('token'); dispatch(actionResetState(null))}}>

                           {isUserAuthorized ?<LoginOutlinedIcon /> : <AccountCircleOutlinedIcon /> }
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
