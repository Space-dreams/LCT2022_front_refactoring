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


            <h2>???????????? ????????????</h2>

            <div className="item_registration cut">
                <h4>??????:</h4>
                <input
                    value={userData.fullName}
                    onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}>
                </input>
                <img src={star} />
            </div>

            <div className="item_registration cut">
                <div className="date">
                    <h4>???????? ????????????????:</h4>
                    <input
                        type={'date'}
                        value={userData.dateofbirth}
                        onChange={(e) => setUserData({ ...userData, dateofbirth: e.target.value })}>
                    </input>
                </div>

                <img src={star} />
            </div>

            <div className="item_registration cut">
                <h4>????????????:</h4>
                <Select
                    placeholder='????????????????'
                    styles={styles}
                    defaultValue={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e })}
                    className="basic-single"
                    options={countryList}
                />
            </div>

            <div className="item_registration cut">
                <h4>??????????????????????:</h4>
                <Select
                    placeholder='????????????????'
                    styles={styles}
                    defaultValue={userData.citizenship}
                    onChange={(e) => setUserData({ ...userData, citizenship: e })}
                    className="basic-single"
                    options={countryList}
                />
            </div>

            <div className="item_registration cut">
                <h4>??????:</h4>
                <Select
                    placeholder='????????????????'
                    styles={styles}
                    defaultValue={userData.gender}
                    onChange={(e) => setUserData({ ...userData, gender: e })}
                    className="basic-single"
                    options={[
                        { value: 'male', label: '??????????????' },
                        { value: 'female', label: '??????????????' }
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
                    ???????????????? ???????????????????????????? ??????????????????????</span>
            </div>

            <div className="agreement"><img src={star} />
                <span className="taext_agreement">???????? ???????????????????????? ?? ???????????????????? </span></div>
            <div className="item_registration">
                <h4>??????????????????????:</h4>
                <Select
                    placeholder='????????????????'
                    defaultValue={userData.education}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, education: e })}
                    className="basic-single"
                    options={[
                        { value: '????????????', label: '????????????' },
                        { value: '??????????????', label: '??????????????' },
                        { value: '???????? ????????????????', label: '???????? ????????????????' }
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>??????????????????:</h4>
                <Select
                    placeholder='????????????????'
                    defaultValue={userData.employment}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, employment: e })}
                    className="basic-single"
                    options={[
                        { value: '??????????????', label: '??????????????' },
                        { value: '???? ??????????????', label: '???? ??????????????' },
                        { value: '?? ???????????? ????????????', label: '?? ???????????? ????????????' },
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>???????? ????????????:</h4>
                <Select
                    placeholder='????????????????'
                    defaultValue={userData.experience}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, experience: e })}
                    className="basic-single"
                    options={[
                        { value: '?????????? 1 ????????', label: '?????????? 1 ????????' },
                        { value: '???? 1 ???? 3 ??????', label: '???? 1 ???? 3 ??????' },
                        { value: '???? 3 ???? 6 ??????', label: '???? 3 ???? 6 ??????' },
                        { value: '?????????? 6 ??????', label: '?????????? 6 ??????' }
                    ]}
                />
            </div>

            <div className="item_registration">
                <h4>????????????????????/???????????????????????????????? ????????:</h4>
                <input
                    value={userData.achievements}
                    onChange={(e) => setUserData({ ...userData, achievements: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>??????????????????????:</h4>
                <Select
                    placeholder='????????????????'
                    styles={styles}
                    defaultValue={userData.profession}
                    onChange={(e) => setUserData({ ...userData, profession: e })}
                    className="basic-single"
                    isMulti
                    options={professionList}
                />
            </div>

            <div className="item_registration">
                <h4>????????????:</h4>
                <Select
                    placeholder='????????????????'
                    defaultValue={userData.stack}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, stack: e })}
                    className="basic-single"
                    isMulti
                    options={stacksList}
                />
            </div>

            <div className="item_registration">
                <h4>????????:</h4>
                <input
                    value={userData.roleInCommand}
                    onChange={(e) => setUserData({ ...userData, roleInCommand: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>?????????????? ??????????????:</h4>
                <input
                    value={userData.command}
                    onChange={(e) => setUserData({ ...userData, command: e.target.value })}>
                </input>
            </div>

            <div className="item_registration">
                <h4>????????????:</h4>
                <Select
                    placeholder='????????????????'
                    defaultValue={userData.status}
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, status: e })}
                    className="basic-single"
                    options={[
                        { value: '??????????', label: '??????????' },
                        { value: '???? ??????????', label: '???? ??????????' },
                        { value: '?? ???????????? ??????????????', label: '?? ???????????? ??????????????' },
                    ]}
                />
            </div>

            <button className="autorization save_info" onClick={handleClick}>??????????????????</button>
            <img className="left-reg" src={left}></img>
        </div>
    )
}

export default FinishRegistration