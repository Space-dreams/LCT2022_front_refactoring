import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setComment } from "../../storage/slises/dataSlise";

import ideahed from '../../images/ideahed.png';
import menLe from '../../images/menLe.png';
import menRe from '../../images/menRe.png';

const FullIdea = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const areaRef = useRef(null)
    // console.log(areaRef.current.scrollHeight)
    const { stacks, allIdeas, comments } = useSelector((state) => state.data);
    const id = useSelector(state => state.user.id);

    const { name, description, stack, author } = allIdeas.find((item) => item.id == params.cardId);

    const [text, setText] = useState('');
    const [showAddComment, setShowAddComment] = useState(false);

    useEffect(() => {
        dispatch(setComment(params.cardId))
    }, [])

    const stackList = stack.map(item => stacks.find((i) => i.id === item.id).name).map(it => {

        return (
            <li key={it}>{it}</li>
        )
    })

    const commentsList = comments.map((item) => {
        return (
            <div className="com" key={item.id}>
                <div className="message_info">
                    <h4>{item.author}</h4>
                    <span>{new Date(item.date_create).toLocaleDateString('ru-RU')}</span>
                </div>
                <span>{item.text}</span>
            </div>
        )
    })



    return (
        <div className="feed">
            <img className="menLe" src={menLe}></img>
            <img className="menRe" src={menRe}></img>
            <div className="marg"><img className="heed" src={ideahed}></img></div>
            <div className="fullIdea">
                <h2>{name}</h2>
                <div style={{ border: '2px solid #000000', backgroundColor: '#000000', width: '758px' }}></div>
                <div className="idea_content">
                    <div className="description_idea">
                        <h3>Описание</h3>
                        {description}
                    </div>
                    <div><h3>Автор</h3>{author}</div>
                    <div>
                        <h3>Скилы</h3>
                        <ul>{
                            stackList}
                        </ul>
                    </div>
                </div>
            </div >
            <div className="comment_wrap">
                <h3>Комментарии</h3>
                {commentsList.length ? commentsList : <div>пока нет комментариев. Будьте первым</div>}

                {showAddComment ?
                    <form onSubmit={() => {
                        if (text) {
                            fetch('/api/v1/comment/', {
                                method: 'POST',
                                body: JSON.stringify({
                                    idea: params.cardId,
                                    author: id,
                                    text: text
                                }),
                                headers: { "content-type": "application/json" }
                            })
                                .then(() => { dispatch(setComment(params.cardId)) })

                            setText('');
                        }
                        setShowAddComment(false)
                    }}>
                        <textarea
                            ref={areaRef}
                            style={areaRef.current && { height: `${areaRef.current.scrollHeight}px` }}
                            className="description"
                            autoFocus={true}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        >
                        </textarea>
                        <button
                            className="send_comment"
                        >отправить комментарий</button>
                    </form>
                    : <button
                        className='send_comment'
                        onClick={() => setShowAddComment(true)}>
                        добавить комментарий</button>}
            </div>
        </div>


    )
}

export default FullIdea