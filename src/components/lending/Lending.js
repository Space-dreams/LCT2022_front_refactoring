import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link} from "react-router-dom";

import './Lending.css';

import spaceDreams from '../../images/giorgio.jpg'
import lenlen from '../../images/lenlen.png'
import lenlenlen from '../../images/lenlenlen.png'
import lenlenlenlen from '../../images/lenlenlenlen.png'

const Lending = () => {

    const navigate = useNavigate();

    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        if (token) { navigate('/user_page') }
    })

    return (
        <>
            <div className="lending">
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
                        <div className="blackFlack"><div className="count_len">01</div></div>
                    </div>
                </section>
                <div className="len_gap"></div>


                <div className="header_in">
                    <Link className="link" to={token ? '/user_page' : '/'}>
                        <div className="logo">
                            <div style={{ width: '42px', border: '1px #000 solid', background: '#000' }} ></div>
                            <div style={{ width: '83px', marginTop: '9px', background: '#000', border: '1px #000 solid' }} ></div>
                            SPACE DREAMS
                        </div>
                    </Link>
                    <div className="nav_wrap">
                        <nav>
                            <ul className="nav_header">
                                <Link className="link" to={token ? '/feed' : '/auth'}>
                                    <li className='black' style={{ color: '#ffffff', fontWeight: '700' }}>Лента идей</li>
                                </Link>
                                <Link className="link" to={token ? '/ideas' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400' }}>Мои идеи</li>
                                </Link>
                                <Link className="link" to={token ? '/project' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400' }}>Мои проекты</li>
                                </Link>
                            </ul>
                        </nav>

                        <Link className="entrance" to={'/auth'}>
                            Войти
                        </Link>

                    </div>
                </div>
                <section className="section1">
                    <div style={{ position: 'relative', zIndex: '200' }} className="section1_text">
                        <div className="line2"></div>
                        <h1 style={{ textAlign: 'end', padding: '0 20px 28px 0', height: '103px', marginTop: '80px', marginBottom: '50px', borderBottom: '5px solid #000000' }} >Лента</h1>
                        <h2>Смотри идеи по направлениям, которые тебе интересны, изучай<br />
                            новые направления!<br />
                            Собери команду, помоги воплотить их в жизнь!</h2>
                        <button
                            onClick={() => navigate('/auth')}>Подробнее</button>
                    </div>

                    <div className="img_notebook">

                        <div className="img_text2" style={{ zIndex: '400' }}>
                            <h1 className="white_h1">идей</h1>
                            <div className="vetr_line2"><div></div></div>
                            <div>
                                <h2>“Сами по себе идеи ценны,
                                    но всякая идея в конце концов только идея.
                                    Задача в том, чтобы реализовать ее практически”
                                </h2>
                                <span> Генри Форд</span>
                            </div>
                        </div>
                        <div style={{ position: 'relative', zIndex: '200' }}><img src={lenlen}></img></div>
                        <div className="blackFlack"><div className="count_len twolen">02</div></div>
                    </div>
                </section>
                <div className="len_gap"></div>


                <div className="header_in">
                    <Link className="link" to={token ? '/user_page' : '/'}>
                        <div className="logo">
                            <div style={{ width: '42px', border: '1px #000 solid', background: '#000' }} ></div>
                            <div style={{ width: '83px', marginTop: '9px', background: '#000', border: '1px #000 solid' }} ></div>
                            SPACE DREAMS
                        </div>
                    </Link>
                    <div className="nav_wrap">
                        <nav>
                            <ul className="nav_header">
                                <Link className="link" to={token ? '/feed' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400' }}>Лента идей</li>
                                </Link>
                                <Link className="link" to={token ? '/ideas' : '/auth'}>
                                    <li className='black' style={{ color: '#ffffff', fontWeight: '700' }}>Мои идеи</li>
                                </Link>
                                <Link className="link" to={token ? '/project' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400' }} >Мои проекты</li>
                                </Link>
                            </ul>
                        </nav>

                        <Link className="entrance" to={'/auth'}>
                            Войти
                        </Link>

                    </div>
                </div>
                <section className="section1">
                    <div style={{ position: 'relative', zIndex: '200' }} className="section1_text">
                        <div className="line2"></div>
                        <h1 style={{ textAlign: 'end', padding: '0 20px 28px 0', height: '103px', marginTop: '80px', marginBottom: '90px', borderBottom: '5px solid #000000' }} >Мои</h1>
                        <h2>Расскажи о своих идеях.
                            Найди единомышленников.
                            Получи комментарии и отзывы<br /> независимых экспертов.
                        </h2>
                        <button
                            onClick={() => navigate('/auth')}>Подробнее</button>
                    </div>

                    <div className="img_notebook">

                        <div className="img_text2" style={{ zIndex: '400' }}>
                            <h1 className="white_h1">идеи</h1>
                            <div className="vetr_line2"><div></div></div>
                            <div>
                                <h2>“Лучший способ проверить,
                                    будет ли ваша идея работать, —
                                    это реализовать её”


                                </h2>
                                <span> Саймон Синек</span>
                            </div>
                        </div>
                        <div style={{ position: 'relative', zIndex: '200' }}><img src={lenlenlen}></img></div>
                        <div className="blackFlack"><div className="count_len twolen">03</div></div>
                    </div>
                </section>
                <div className="len_gap"></div>

                <div className="header_in">
                    <Link className="link" to={token ? '/user_page' : '/'}>
                        <div className="logo">
                            <div style={{ width: '42px', border: '1px #000 solid', background: '#000' }} ></div>
                            <div style={{ width: '83px', marginTop: '9px', background: '#000', border: '1px #000 solid' }} ></div>
                            SPACE DREAMS
                        </div>
                    </Link>
                    <div className="nav_wrap">
                        <nav>
                            <ul className="nav_header">
                                <Link className="link" to={token ? '/feed' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400', cursor: 'pointer' }}>Лента идей</li>
                                </Link>
                                <Link className="link" to={token ? '/ideas' : '/auth'}>
                                    <li className='black' style={{ color: '#939393', fontWeight: '400' }}>Мои идеи</li>
                                </Link>
                                <Link className="link" to={token ? '/project' : '/auth'}>
                                    <li className='black' style={{ color: '#ffffff', fontWeight: '700' }}>Мои проекты</li>
                                </Link>
                            </ul>
                        </nav>

                        <Link className="entrance" to={'/auth'}>
                            Войти
                        </Link>

                    </div>
                </div>
                <section className="section1">
                    <div style={{ position: 'relative', zIndex: '200' }} className="section1_text">
                        <div className="line2"></div>
                        <h1 style={{ textAlign: 'end', padding: '0 20px 28px 0', height: '103px', marginTop: '80px', marginBottom: '90px', borderBottom: '5px solid #000000' }} >Мои</h1>
                        <h2>Реализуй свою идею,<br />
                            найди команду для проекта!<br />
                            Получи поддержку Агентства инноваций Москвы!
                        </h2>
                        <button
                            onClick={() => navigate('/auth')}>Подробнее</button>
                    </div>

                    <div className="img_notebook">

                        <div className="img_text2" style={{ zIndex: '400' }}>
                            <h1 className="white_h1">проекты</h1>
                            <div className="vetr_line2 marginL"><div></div></div>
                            <div>
                                <h2>“Когда вам в голову пришла
                                    хорошая идея,
                                    действуйте незамедлительно”
                                </h2>
                                <span> Билл Гейтс</span>
                            </div>
                        </div>
                        <div style={{ position: 'relative', zIndex: '200' }}><img src={lenlenlenlen}></img></div>
                        <div className="blackFlack"><div className="count_len twolen">04</div></div>
                    </div>
                </section>
                <div className="len_gap"></div>
            </div>
        </>
    )
}

export default Lending