import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from 'react-select';

import ideahed from '../../images/ideahed.png';
import menLe from '../../images/menLe.png';
import menRe from '../../images/menRe.png';

import { setMyIdeas, setAllIdeas } from "../../storage/slises/dataSlise";
import BriefIdea from "../briefIdea/BriefIdea";

import './MyIdeas.css'

const MyIdeas = () => {

    const id = useSelector(state => state.user.id)
    const { stacks, myIdeas } = useSelector((state) => state.data)
    const descRef = useRef(null)

    useEffect(() => {
        dispatch(setMyIdeas(id));
    }, [])

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        stack: [],
        name: '',
        description: ''
    })
    const [showAdd, setShowAdd] = useState(false)
    const handleClick = () => {
        const newIdea = {
            author: id,
            description: userData.description,
            name: userData.name,
            stack: userData.stack.map(item => item.value)

        }

        if (newIdea.description && newIdea.name && newIdea.stack) {
            fetch('/api/v1/user_ideas/', {
                method: 'POST',
                body: JSON.stringify(newIdea),
                headers: { "content-type": "application/json" }
            })
                .then(() => {
                    dispatch(setAllIdeas())
                        .then(() => { dispatch(setMyIdeas(id)) })

                });


            setUserData({
                stack: [],
                name: '',
                description: ''
            });

            setShowAdd(false);

        }
    }

    const styles = {
        control: styles => ({
            ...styles,
            outline: 'none',
            padding: '20px',
            marginTop: '10px',
            border: '1px black solid',
            cursor: 'pointer',
            color: '#5E6C84',
            borderRadius: '8px',
            backgroundColor: '#F5F5F5',
            fontSize: '18px',
            paddinLeft: '20px'

        }),
        placeholder: styles => ({
            ...styles,

        }),

        option: styles => ({
            ...styles,
            color: '#000000',
            cursor: 'pointer',
            fontSize: '18px',
            // width: '70%',
            paddinLeft: '20px'
        })
    }

    const stacksList = stacks.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })


    const list = myIdeas.map(item => {
        return (
            <li key={item.id} >
                <Link
                    to={`/${item.id}`}
                    className="link"
                >
                    <BriefIdea id={item.id} />
                </Link>
            </li>)

    })

    return (

        <div style={{ position: 'relative' }}>
            <img className="menLe" src={menLe}></img>
            <img className="menRe" src={menRe}></img>
            <div className="feed">
                <div className="marg"> <h2>Мои идеи</h2><img className="heed" src={ideahed}></img></div>
                {list.length ? <ul className="my_ideas_ul">
                    {list}
                </ul>
                    : <h1>Вы пока не создали ни одной идеи</h1>}
            </div>

            {showAdd ? <div className="addIdea">
                <h3>Добавить идею</h3>
                Название:
                <input
                    maxLength={128}
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}>
                </input>
                Описание:
                <textarea
                    ref={descRef}
                    style={descRef.current && { height: `${descRef.current.scrollHeight}px` }}
                    className="dtextAreaMy"
                    value={userData.description}
                    onChange={(e) => setUserData({ ...userData, description: e.target.value })}>
                </textarea>
                Необходимые навыки:
                <Select
                    placeholder='Выберите необходимые навыки'
                    styles={styles}
                    defaultValue={userData.stack}
                    value={userData.stack}
                    onChange={(e) => setUserData({ ...userData, stack: e })}
                    className="basic-single"
                    isMulti
                    options={stacksList}
                ></Select>
                <button
                    className="addButtin"
                    onClick={handleClick}
                > Добавить идею</button>
                <span
                    className="back"
                    onClick={() => setShowAdd(false)}
                >назад</span>


            </div>
                : <div className="but-wrap">
                    <button
                        className="create_idea"
                        onClick={() => setShowAdd(true)}>
                        Создать идею
                    </button>
                </div>}
        </div>


    )
}
export default MyIdeas