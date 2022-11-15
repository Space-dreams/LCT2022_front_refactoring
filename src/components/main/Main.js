import { React } from "react";
import { Routes, Route } from 'react-router-dom';

import Auth from "../auth/Auth";
import Registration from '../registration/Registration';
import Lending from "../lending/Lending";
import FinishRegistration from "../finishRegistration/FinishRegistration";
import Confirmation from "../confirmation/Confirmation";
import UserPage from "../userPage/UserPage";
import Profile from "../profile/Profile";
import IdeasFeed from "../ideasFeed/IdeasFeed";
import MyIdeas from "../myIdeas/MyIdeas";
import Project from "../project/Project";
import Error from "../error/Error";

import './Main.css'
import FullIdea from "../fullIdea/FullIdea";
import { useSelector } from "react-redux";



const Main = () => {

    const isError = useSelector((state) => state.user.isError)

    return (
        !isError ? <main >
            <Routes>
                <Route path='/' element={<Lending />} />
                <Route path='/user_page' element={<UserPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/feed" element={<IdeasFeed />} />
                <Route path="/ideas" element={<MyIdeas />} />
                <Route path=":cardId" element={<FullIdea />} />
                <Route path="/project" element={<Project />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/finish_registration" element={<FinishRegistration />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </main>
            : <Error />
    )
}

export default Main