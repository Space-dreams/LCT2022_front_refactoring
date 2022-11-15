import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { logOut } from "../../storage/slises/userSlice";

import search from '../../images/search.svg'
import quit from '../../images/quit.svg'
import messege from '../../images/messege.svg'

import './Header.css';

const Header = () => {

    const popoverRef = useRef(null)
    const location = useLocation()

    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => setShowMenu(prev => !prev);

    const PopoverMy = () => {

        useEffect(() => {

            const handleOutsideClick = e => {
                e.stopPropagation()
                if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                    setTimeout(() => { setShowMenu(false) }, 0)
                }
            }

            document.addEventListener('mouseup', handleOutsideClick)

            return () => {
                document.removeEventListener('mouseup', handleOutsideClick)
            }
        }, [showMenu, popoverRef])

        if (!showMenu) {
            return null
        }

        return (
            <>
                {showMenu &&
                    <div className="owerlay_menu" ref={popoverRef}>
                        <Link
                            onClick={handleClick}
                            className="link"
                            to={'/profile'}>
                            профиль
                        </Link>
                        <Link
                            onClick={() => {
                                dispatch(logOut())
                                handleClick();
                                sessionStorage.removeItem('token')
                                sessionStorage.removeItem('userLCT')
                            }}
                            className="link"
                            to={'/'}>
                            выйти
                        </Link>
                    </div>}
            </>
        )


    }




    return (
        <header>
            <div className="header">

                <Link className="link" to={'/user_page'}>
                    <div className="logo">
                        <div style={{ width: '42px', border: '1px #000 solid', background: '#000' }} ></div>
                        <div style={{ width: '83px', marginTop: '9px', background: '#000', border: '1px #000 solid' }} ></div>
                        SPACE DREAMS
                    </div>
                </Link>
                <div className="nav_wrap">
                    <nav>
                        <ul className="nav_header">
                            <Link className="link" to={token ? '/feed' : '/auth'}>
                                <li className={!(location.pathname === '/') && 'white' || 'black'} >Лента идей</li>
                            </Link>
                            <Link className="link" to={token ? '/ideas' : '/auth'}>
                                <li className={!(location.pathname === '/') && 'white' || 'black'}>Мои идеи</li>
                            </Link>
                            <Link className="link" to={token ? '/project' : '/auth'}>
                                <li className={!(location.pathname === '/') && 'white' || 'black'}>Мои проекты</li>
                            </Link>
                        </ul>
                    </nav>

                    {!token ?
                        (location.pathname === '/') && <Link className="entrance" to={'/auth'}>
                            Войти
                        </Link>
                        :
                        <div style={{ position: 'relative', width: '226px' }}>

                            <img className="img_head" src={search}></img>
                            <img className="img_head" src={messege}></img>
                            <img
                                className="img_head"
                                src={quit}
                                onClick={handleClick}></img>

                            <PopoverMy />
                        </div>}
                </div>
            </div>
        </header>
    )
}

export default Header;