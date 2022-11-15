import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import './Lending.css';

import spaceDreams from '../../images/giorgio.jpg'

const Lending = () => {

    const navigate = useNavigate();

    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        if (token) { navigate('/user_page') }
    })
    return (<div className="lending">
        <section className="section1">
            <div style={{ position: 'relative', zIndex: '200' }} className="section1_text">
                <div className="line"></div>
                <h1>Идеи.</h1>
                <h1>Инновации.</h1>
                <h1>Реализация.</h1>
                <h2>Смотри идеи по направлениям, которые тебе интересны.
                    Помоги воплотить их в жизнь!</h2>
                <button
                    onClick={() => navigate('/auth')}>Подробнее</button>
            </div>

            <div className="img_notebook">
                <div className="img_text" style={{ zIndex: '400' }}>
                    <div className="vetr_line"></div>
                    <div>
                        <h2>«Великие идеи приходят,
                            когда мир нуждается в них».</h2>
                        <span> Остин Фелпс</span>
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: '100' }}><img src={spaceDreams}></img></div>
                <div className="blackFlack"></div>
            </div>

        </section>

    </div>
    )
}

export default Lending