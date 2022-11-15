import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUserLogin, fetchUserData } from "../../storage/slises/userSlice";

import './Auth.css'

import left from '../../images/leftPNG.png';
import right from '../../images/R.png';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(state => state.user.token)

    const [values, setValues] = useState({ email: '', password: '' });

    return (
        <div className="auth">
            <img className="left" src={left}></img>
            <img className="right" src={right}></img>
            <h1>Войти</h1>
            <form className="auth_form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const resultAuthFetch = await dispatch(fetchUserLogin([values.password, values.email]));
                        const id = unwrapResult(resultAuthFetch);
                        await dispatch(fetchUserData(id.id));
                        if (id.auth_token) { navigate('/user_page') }

                    } catch (err) {

                    }
                }}>
                <input
                    className="auth_input"
                    placeholder="e-mail"
                    type={'email'}
                    onChange={e => setValues({ ...values, email: e.target.value })}
                    value={values.email}>
                </input>

                <input
                    type={'password'}
                    className="auth_input"
                    placeholder="пароль"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    value={values.password}>
                </input>

                <div className="remember">
                    <div><input type={'checkbox'}></input> Запомнить меня</div>
                    <Link className="link">Забыли свой пароль?</Link>
                </div>

                <button
                    className="autorization">
                    Продолжить</button>
            </form>
            <span className="or">или</span>
            <Link className="link to_reg" to={'/registration'}>Зарегистрироваться</Link>

        </div>
    )
}

export default Auth