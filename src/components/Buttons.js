import React from 'react';
import {useHistory} from 'react-router-dom'

function Buttons(props) {
    const history = useHistory()
    const handleClick = () => {
        history.push('/my-link')
    }
    return (
        <div>
            <button className='button' onClick={handleClick}>
                Learn More
            </button>
        </div>
    );
}

export default Buttons;