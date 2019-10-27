import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

class App extends React.Component{
    render(){
        return (
            <div className="app">
            <RoomList />
            /** Every time the data changes, render() is triggred and data will pass to MessageList 
            data is passed to MessageList as messages prop*/
            <MessageList messages={this.state.messages}/>
            <SendMessageForm />
            <NewRoomForm />
        </div>
        );
    }
}
export default App