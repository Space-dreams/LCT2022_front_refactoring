import React, { useState } from "react";

import './Registration.css';

import left from '../../images/leftPNG.png';
import right from '../../images/R.png';
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        nick_name: '',
        email: '',
        password: ''
    });

    const fetchToRegistration = (e) => {
        e.preventDefault();
        fetch('/api/v1/auth/users/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { "content-type": "application/json" }
        })
            .then((data) => data.json())
            .then(data => { if ('id' in data) { navigate('/confirmation') } })
    }

    return (
        <div className="auth">
            <h1>Регистрация</h1>

            <img className="left" src={left}></img>
            <img className="right" src={right}></img>

            <form
                className="form-registration"
                onSubmit={fetchToRegistration}>
                <input
                    className="auth_input"
                    placeholder="nick name"
                    onChange={e => setValues({ ...values, nick_name: e.target.value })}
                    value={values.nick_name}>
                </input>

                <input
                    className="auth_input"
                    placeholder="password"
                    type={'password'}
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    value={values.password}>
                </input>
                <input
                    className="auth_input"
                    placeholder="e-mail"
                    type={'email'}
                    onChange={e => setValues({ ...values, email: e.target.value })}
                    value={values.email}>
                </input>
                <button className="autorization reg_button">Зарегистрироваться</button>
            </form>
        </div >

    )
}

export default Registration