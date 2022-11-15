import React from "react";
import { useSelector } from "react-redux";

import com from '../../images/coment.svg';
import like from '../../images/like.svg';
import dis from '../../images/dis.svg';

import './BriefIdea.css'

const BriefIdea = ({ id }) => {

    const { stacks, allIdeas } = useSelector((state) => state.data)

    const elem = allIdeas.find((item) => item.id === id);

    const stackList = elem.stack.map(item => stacks.find((i) => i.id === item.id).name).map(item => {
        return (
            <li key={item}>
                {item}
            </li>
        )
    })
    console.log(stackList.length);
    return (
        <div className="briefIdea">
            <h2>{elem.name.length > 50 ? elem.name.substring(0, 50) + '...' : elem.name}</h2>
            <div style={{ border: '2px solid #000000', backgroundColor: '#000000' }}></div>
            <div>{elem.description.length > 80 ? elem.description.substring(0, 80) + '...' : elem.description}</div>
            <ul>{
                stackList.length > 5 ? stackList.slice(0, 5) : stackList}
            </ul>
            {stackList.length > 5 && <div className="more">. . .</div>}
            <div className="idea-info">
                <div>
                    <img src={com}></img><span>0</span>
                </div>
                <div>
                    <img src={like}></img><span>4</span>
                    <img src={dis}></img><span>0</span>
                </div>
            </div>
        </div>
    )
}

export default BriefIdea
