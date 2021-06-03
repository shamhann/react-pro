import React from 'react';

function Photo(props) {
    return (
        <li>
            <img src={props.photo.url} alt="image"/>
        </li>
    );
}

export default Photo;