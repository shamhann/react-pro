import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../redux/action";

function User(props) {
    const dispatch = useDispatch();

    const handleSelectUser = () => {
        dispatch(selectUser(props.user.id))
    }

    return (
        <li onClick={handleSelectUser}>
            <div className='userName'>
                {props.user.name}
            </div>
            <div className='userEmail'>
                {props.user.email}
            </div>
        </li>
    );
}

export default User;