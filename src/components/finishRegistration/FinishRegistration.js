import React from "react";
import Select from 'react-select';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../storage/slises/userSlice";
import { useNavigate } from "react-router-dom";

import './FinishRegistration.css'

import star from '../../images/Vector.svg';
import right from '../../images/R.png';
import left from '../../images/leftPNG.png';


const FinishRegistration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user.user);
    const id = useSelector(state => state.user.id)
    const { stacks, profession, country } = useSelector((state) => state.data)

    const [userData, setUserData] = useState({
        nickName: user.nickName,
        role: user.role,
        fullName: user.fullName,
        dateofbirth: user.dateofbirth,
        country: user.country,
        citizenship: user.citizenship,
        gender: user.gender,
        email: user.email,
        agreement: user.agreement,
        education: user.education,
        employment: user.employment,
        experience: user.experience,
        achievements: user.achievements,
        profession: user.profession,
        stack: user.stack,
        roleInCommand: user.roleInCommand,
        command: user.command,
        status: user.status
    })

    const sendUserData = () => {
        const data = {
            id: id,
            nick_name: userData.nickName,
            role: userData.role,
            full_name: userData.fullName,
            dateofbirth: userData.dateofbirth,
            country: JSON.stringify(userData.country),
            citizenship: JSON.stringify(userData.citizenship),
            gender: JSON.stringify(userData.gender),
            email: userData.email,
            agreement: userData.agreement,
            education: JSON.stringify(userData.education),
            employment: JSON.stringify(userData.employment),
            experience: JSON.stringify(userData.experience),
            achievements: userData.achievements,
            profession: JSON.stringify(userData.profession),
            stack: JSON.stringify(userData.stack),
            role_in_command: userData.roleInCommand,
            command: userData.command,
            status: JSON.stringify(userData.status)
        }

        fetch(`/api/v1/profile/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
    }

    const handleClick = () => {
        dispatch(setUser(userData));
        sendUserData();
        sessionStorage.setItem('userLCT', JSON.stringify(userData))
        navigate('/user_page')
    }

    const styles = {
        control: styles => ({
            ...styles,
            outline: 'none',
            padding: '4px',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#5E6C84',
            borderRadius: '8px',
            backgroundColor: '#F5F5F5',
            fontSize: '25px',
            paddinLeft: '20px'  
        }),
        placeholder: styles => ({
            ...styles,

        }),

        option: styles => ({
            ...styles,
            cursor: 'pointer',
            fontSize: '25px',
            paddinLeft: '20px'
        })
    }

    const professionList = profession.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })

    const countryList = country.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })

    const stacksList = stacks.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })

    return (
        <div className="registration">
            <img className="right_reg" src={right}></img>


            <h2>Личные данные</h2>

            <div className="item_registration cut">
                <h4>ФИО:</h4>
                <input
                    value={userData.fullName}
                    onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}>
                </input>
                <img src={star} />
            </div>

            <div className="item_registration cut">
                <div className="date">
                    <h4>Дата рождения:</h4>
                    <input
                        type={'date'}
                        value={userData.dateofbirth}
                        onChange={(e) => setUserData({ ...userData, dateofbirth: e.target.value })}>
                    </input>
                </div>

                <img src={star} />
            </div>

            <div className="item_registration cut">
                <h4>Страна:</h4>
                <Select
                    placeholder='Выберите'
                    styles={styles}
                    defaultValue={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e })}
                    className="basic-single"
                    options={countryList}
                />
            </div>

            <div className="item_registration cut">
                <h4>Гражданство:</h4>
                <Select
                    placeholder='Выберите'
                    styles={styles}
                    defaultValue={userData.citizenship}
                    onChange={(e) => setUserData({ ...userData, citizenship: e })}
                    className="basic-single"
                    options={countryList}
                />
            </div>

            <div className="item_registration cut">
                <h4>Пол:</h4>
                <Select
                    placeholder='Выберите'
                    styles={styles}
                    defaultValue={userData.gender}
                    onChange={(e) => setUserData({ ...userData, gender: e })}
                    className="basic-single"
                    options={[
                        { value: 'male', label: 'Мужской' },
                        { value: 'female', label: 'Женский' }
                    ]}
                />
            </div>

            <div className="item_registration cut">
                <h4>E-mail:</h4>
                <input
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}>
                </input>
                <img src={star} />
            </div>
            <div className='agreement'>
                <input type={'checkbox'}
                    checked={userData.agreement}
                    onChange={e => setUserData({ ...userData, agreement: e.target.checked })}></input>
                <span className="taext_agreement">
                    Получать дополнительные уведомления</span>
            </div>

            <div className="agreement"><img src={star} />
                <span className="taext_agreement">Поля обязательные к заполнению </span></div>
            <div className="item_registration">
                <h4>Образование:</h4>
                <Select
                    placeholder='Выберите'
                    defaultValue={userData.education}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, education: e })}
                    className="basic-single"
                    options={[
                        { value: 'Высшее', label: 'Высшее' },
                        { value: 'Среднее', label: 'Среднее' },
                        { value: 'Выше среднего', label: 'Выше среднего' }
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>Занятость:</h4>
                <Select
                    placeholder='Выберите'
                    defaultValue={userData.employment}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, employment: e })}
                    className="basic-single"
                    options={[
                        { value: 'работаю', label: 'работаю' },
                        { value: 'не работаю', label: 'не работаю' },
                        { value: 'в поиске работы', label: 'в поиске работы' },
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>Опыт работы:</h4>
                <Select
                    placeholder='Выберите'
                    defaultValue={userData.experience}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, experience: e })}
                    className="basic-single"
                    options={[
                        { value: 'менее 1 года', label: 'менее 1 года' },
                        { value: 'от 1 до 3 лет', label: 'от 1 до 3 лет' },
                        { value: 'от 3 до 6 лет', label: 'от 3 до 6 лет' },
                        { value: 'более 6 лет', label: 'более 6 лет' }
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>Достижения/профессиональный опыт:</h4>
                <input
                    value={userData.achievements}
                    onChange={(e) => setUserData({ ...userData, achievements: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>Направление:</h4>
                <Select
                    placeholder='Выберите'
                    styles={styles}
                    defaultValue={userData.profession}
                    onChange={(e) => setUserData({ ...userData, profession: e })}
                    className="basic-single"
                    isMulti
                    options={professionList}
                />
            </div>

            <div className="item_registration">
                <h4>Навыки:</h4>
                <Select
                    placeholder='Выберите'
                    defaultValue={userData.stack}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, stack: e })}
                    className="basic-single"
                    isMulti
                    options={stacksList}
                />
            </div>

            <div className="item_registration">
                <h4>Роль:</h4>
                <input
                    value={userData.roleInCommand}
                    onChange={(e) => setUserData({ ...userData, roleInCommand: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>Наличие команды:</h4>
                <input
                    value={userData.command}
                    onChange={(e) => setUserData({ ...userData, command: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>Статус:</h4>
                <Select
                    placeholder='Выберите'
                    defaultValue={userData.status}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, status: e })}
                    className="basic-single"
                    options={[
                        { value: 'занят', label: 'занят' },
                        { value: 'не занят', label: 'не занят' },
                        { value: 'в поиске проекта', label: 'в поиске проекта' },
                    ]}
                />
            </div>

            <button className="autorization save_info" onClick={handleClick}>сохранить</button>
            <img className="left-reg" src={left}></img>
        </div>
    )
}

export default FinishRegistration