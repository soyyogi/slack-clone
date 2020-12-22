import React from 'react';
import './Message.css';

function Message({ message, user, userimage, timestamp }) {
    return (
        <div className="message">
            <img src={userimage} alt="user image" />
            <div className="message__info">
                <h4>{user} timestamp..</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
