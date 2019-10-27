/* Message component is a direct child of MessageList component
It takes the data from the parent, and render it out*/
import React from 'react'
//class Message extends React.Component{
//functional component without render method
function Message(props){
        return(
            /**returning username and text in jsx file */
        <div className="message">
            <div key ={index} className="message">
                <div className="message-username">{props.username}</div>
                <div className="message-text">{props.text}</div>
            </div>
        </div>
        )
    }

export default Message