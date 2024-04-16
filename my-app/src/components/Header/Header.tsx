import { Box, Container,TextField } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {selectorToken, selectorUrlAddress, selectorUserData} from "../../selectors";
import { actionFetchAuthorizationUser } from "../../reducers";
import Authorization from "../../pages/Authorization";
import setAuthToken from "../../helpers/setAuthToken";




const Header: React.FC<{ authToken: string }> = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
    const dispatch: any = useDispatch(); // Укажите тип вашего dispatch, если это необходимо
    const authToken = useSelector(selectorToken);

    useEffect(() => {
        document.addEventListener('mousedown', handleBurgerMenu);
        return () => {
            document.removeEventListener('mousedown', handleBurgerMenu);
        };
    },);
    useEffect(() => {
        setAuthToken(authToken);
        if (authToken) {
            dispatch(actionFetchAuthorizationUser() as any); // Уточните тип вашего action, если это необходимо
        }
    }, [authToken, dispatch]);

    const burgerMenuRef = useRef<HTMLDivElement>(null);
    const handleBurgerMenu = (event: MouseEvent) => {
        if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target as Node) && isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const toggleModalAuth = (event) => {
        event.preventDefault();
        setIsModalAuthOpen(!isModalAuthOpen);
    }

    const closeModalAuth = () => {
        setIsModalAuthOpen(false);
    }

// @ts-ignore
    // @ts-ignore
    return (
    <>
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__logo-wrapper">
                        <Link to="/" className="logo">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
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
                    <nav className={isMenuOpen ? 'header__menu header__menu--active' : 'header__menu'}
                         ref={burgerMenuRef}>

                        <Box className="header-menu__list">
                            <NavLink
                                to={"/"}
                                className="header-menu__list-item"
                                //activeclassname="menu-list__item active-item"
                            >
                                Ecology
                            </NavLink>
                            <NavLink
                                to="/workshop"
                                className="header-menu__list-item"
                                // activeclassname="menu-list__item active-item"
                            >
                                Workshop
                            </NavLink>
                            <NavLink
                                to="/shop"
                                className="header-menu__list-item"
                                //activeclassname="menu-list__item active-item"
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                className="header-menu__list-item"
                                //activeclassname="menu-list__item active-item"
                            >
                                Contacts
                            </NavLink>
                        </Box>
                    </nav>
                    {/*<Box className="header-menu__input-wrapper">
                        <Box className="header-menu__input-search">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M26.7084 27.7201C27.3218 28.3334 28.2684 27.3867 27.6551 26.7867L22.6551 21.7734C24.409 19.8328 25.3785 17.3092 25.3751 14.6934C25.3751 8.84008 20.6151 4.08008 14.7618 4.08008C8.90844 4.08008 4.14844 8.84008 4.14844 14.6934C4.14844 20.5467 8.90844 25.3067 14.7618 25.3067C17.4018 25.3067 19.8418 24.3334 21.7084 22.7201L26.7084 27.7201ZM5.48044 14.6934C5.48044 9.57341 9.65377 5.41341 14.7604 5.41341C19.8804 5.41341 24.0404 9.57341 24.0404 14.6934C24.0404 19.8134 19.8804 23.9734 14.7604 23.9734C9.65377 23.9734 5.48044 19.8134 5.48044 14.6934Z"
                                    fill="#EDEDED"/>
                            </svg>
                        </Box>
                    </Box>*/}
                        <Box className="menu-button" onClick={(event) => toggleModalAuth(event)}>
                            {isMenuOpen ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
                        </Box>
                </Box>

            </Container>
        </header>
    </>
);
};
export default Header;