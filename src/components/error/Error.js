import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { isErrorReset } from "../../storage/slises/userSlice";

const Error = () => {

    const message = useSelector(state => state.user.errorMessege)
    const dispatch = useDispatch();

    return (
        <section className="section_error">
            <h1>{message}</h1>
            <button
                className="autorization"
                onClick={() => dispatch(isErrorReset())}
            >Повторить</button>
        </section>
    )
}
export default Error