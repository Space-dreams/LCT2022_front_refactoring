import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import fon from '../../images/fon.png';

import './UserPage.css'



const UserPage = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user)

    const requiredFull = user.fullName && user.email && user.dateofbirth

    useEffect(() => {
        if (!requiredFull) { navigate('/finish_registration') }
    })

    return (
        <section className="user_page_section">
            <img className="fon" src={fon}></img>
            <div className="black_ground"></div>
            <div className="user_page">
                <div className="user_page_item">
                    <div>
                        <Link className="link" to={'/feed'}><h2>Лента идей</h2></Link>
                        <span>Смотри идеи по направлениям, которые тебе интересны.
                            Помоги воплотить их в жизнь!
                        </span>
                    </div>
                    <button 
                    className="autorization user-page-bitton"
                    onClick={()=>{navigate('/feed')}}
                    >Подробнее</button>

                </div>

                <div className="user_page_item">
                    <div>
                        <Link className="link" to={'/ideas'} ><h2>Мои идеи</h2></Link>
                        <span>Смотри идеи по направлениям, которые тебе интересны.
                            Помоги воплотить их в жизнь!
                        </span>
                    </div>
                    <button 
                    className="autorization user-page-bitton"
                    onClick={()=>{navigate('/ideas')}}
                    >Подробнее</button>

                </div>
                <div className="user_page_item">
                    <div>
                        <Link className="link" to={'/project'}><h2>Мои проекты</h2></Link>
                        <span>Смотри идеи по направлениям, которые тебе интересны.
                            Помоги воплотить их в жизнь!
                        </span>
                    </div>
                    <button 
                    className="autorization user-page-bitton"
                    onClick={()=>{navigate('/project')}}
                    >Подробнее</button>

                </div>
            </div>
        </section >
    )
}

export default UserPage