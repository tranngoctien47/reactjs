import React, { useContext } from 'react'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { Context } from '../App'


export default function Header() {

    let { login, user, handleLogin, logout } = useContext(Context)


    function openMenu() {
        document.body.classList.toggle('menu-is-show')

    }

    let history = useHistory()

    function linkLoading(e) {
        document.body.classList.remove('menu-is-show')
        document.querySelector('.loading-page').style.transform = 'scale(25)'
        e.preventDefault();
        setTimeout(() => {
            history.push(e.target.href.replace(window.location.origin, '') || '')
            document.querySelector('.loading-page').style.transform = 'scale(0)'
        }, 1000)

    }


    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={openMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <a href="#" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </a>
                    <div className="right">
                        {
                            login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <NavLink to="/profile/course">Khóa học của tôi</NavLink>
                                        <NavLink to="/profile">Thông tin tài khoản</NavLink>
                                        <NavLink to="/" onClick={logout}>Đăng xuất</NavLink>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="not-login bg-none">
                                        <a href="#" className="btn-register" onClick={handleLogin}>Đăng nhập</a>
                                        <a href="login.html" className="btn main btn-open-login">Đăng ký</a>
                                    </div>
                                </div>

                            )
                        }


                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li >
                        <NavLink onClick={linkLoading} exact to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/khoahoc">Khoá Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}