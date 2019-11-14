//import React from 'react'
const React = require('react');

var Message = function Message(props) {  
    return (
        <div className="message">
            <div className="message-username">{props.username}</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

module.exports = Message;