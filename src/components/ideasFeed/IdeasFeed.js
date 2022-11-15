import React, { useEffect } from "react";

import BriefIdea from "../briefIdea/BriefIdea";

import './IdeasFeed.css'

import heed from '../../images/heed.png';
import feed_fon from '../../images/feed_fon.png';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IdeasFeed = () => {

    const allIdeas = useSelector(state => state.data.allIdeas);

    const list = allIdeas.map(item => {
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
        <div className="feed">
            <div className="black_feed">
                <h2>Лента идей</h2>
                <ul className="feed_nav">
                    <li className="activ_feed">ПОТОК</li>
                    <li>АВТОРЫ</li>
                    <li>КОМАНДЫ</li>
                </ul>
                <img className="heed" src={heed}></img>
            </div>
            <img className="feed_fon" src={feed_fon}></img>
            <div className="feed_content">
                <div>
                    <ul className="feed_ul">
                        {list.slice(0, 4)}
                    </ul>
                    <button className="more_ideas">Показать больше идей</button>
                </div>
                <div className="tops">
                    <div className="top">
                        <div>ТОП 5 идей</div>
                        <ol>
                            <li>Сервис по импортозамещению</li>
                            <div className="gap"></div>
                            <li className="best"> Сервис для разметки медецинских изображений и генирации диагностических исследований</li>
                            <div className="gap"></div>
                            <li className="best"> Сервис Контроля городского ЖКХ</li>
                            <div className="gap"></div>
                            <li> Сервис по разработке востребованных городом цифровых продуктов</li>
                            <div className="gap"></div>
                            <li> Сервис по размещению задач и поиску волонтёров</li>
                        </ol>
                    </div>
                    <div className="top">
                        <div>ТОП 5 проектов</div>
                        <ol>
                            <li>Сервис для реализации
                                инновационных идей
                                (платформа стартапов)</li>
                            <div className="gap"></div>
                            <li> Интерактивная карта ВДНХ</li>
                            <div className="gap"></div>
                            <li className="best"> Сервис расчёта рыночной
                                стоимости квартир
                                в собственности г.Москвы</li>
                            <div className="gap"></div>
                            <li> Сервис по выявлению
                                перспективных
                                производственных ниш </li>
                            <div className="gap"></div>
                            <li> Интерактивная карта
                                для формирования границ
                                территорий Москвы</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdeasFeed

