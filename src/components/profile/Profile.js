import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1>Profile</h1>
            <button className="autorization" onClick={() => navigate('/finish_registration')}> Редактировать</button>
        </>
    )
}

export default Profile