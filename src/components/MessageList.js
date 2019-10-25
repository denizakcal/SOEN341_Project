/**in render method, it returns Message component. Which means that Message is a child of MessageList*/
import React from 'react'
const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'What s up man!'
    },
    {
       senderId: 'Oussama',
        text: 'Lets play soccer'   
    },
    {
        senderId: 'perborgen',
        text: 'All right'
    },
]

class MessageList extends React.Component{
    render(){
        return(
        <div className= "message-list">
            {DUMMY_DATA.map((message, index)=>{
            return (
            <div>{message.text}</div>
            )
        })}
        </div>
        )
    }
}
export default MessageList