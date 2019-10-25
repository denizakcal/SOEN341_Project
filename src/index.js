/*import Chatkit from '@pusher/chatkit'*/
import React from 'react'
import ReactDom from 'react-dom'

import App from './App';
ReactDom.render(<App />, document.getElementById('root'));

/*import {tokenUrl, instanceLocator} from './config'
class App extends React.Component{
    constructor(){
        super()
        this.state= {
            currentRoomId: null,
            joinableRoom:[],
            joinedRooms:[],
            messages:[]
        }
        this.subscribeToRoom=this.subscribeToRoom.bind(this)
        this.sendMessage=this.sendMessage.bind(this)
        this.subscribeToRoom=this.subscribeToRoom.bind(this)
    } 
    componentDidMount(){
        const chatManager =new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId:"perborgen",
            tokenProvider: new Chatkitk.TokenProvider({
                url:tokenUrl
            })
        })
        chatManager.connect()
        .this(currentUser =>{})
    }
}