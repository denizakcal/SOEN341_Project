/* Message component is a direct child of MessageList component
It takes the data from the parent, and render it out*/
import React from 'react'
class Message extends React.Component{
    render(){
        return(
        <div className="message">
            /*<div className= "message-username">{this.props.username}</div>
            .......
            */
            </div>
        )
    }
}
export default Message