/**in render method, it returns Message component. Which means that Message is a child of MessageList*/
import React from 'react'
import Message from './Message'
import ReactDom from 'react-dom'

class MessageList extends React.Component{
    componentWillUpdate(){
        //prevent jumping directly to the last message received (no auto scroll)
        this.shouldScrollToBottom=node.scrollTop + node.clientHeight +100>= node.scrollHeight
    }
    componentDidUpdate(){
        //called directly after a component has been updated
        if(this.shouldScrollToBottom){
            const node = ReactDom.findDOMNode(this)
            node.scrollTop=node.scrollHeight //how far scrolling down + how long the entire scrollable element is
        }
    }
    
    render(){
        if(!this.props.roomId) {
            return(
                <div className="message-list">
                    <div className="join-room">
                       &larr; 
                       Join a room!
                    </div>

                </div>
            )
        }
        return(
            //It starts when render is trigred from App.js
        <div className= "message-list">
            /**fetching data from Chatkit API */
            {this.props.messages.map((message, index)=>{
                return(
                    /**Message.js compenont takes username prop and text prop */
                    <Message key={index} username={message.senderId}  />//Message takes (username and text) props. These data are passed to Message.js
                    
                )
        })}
        </div>
        )
    }
}
export default MessageList