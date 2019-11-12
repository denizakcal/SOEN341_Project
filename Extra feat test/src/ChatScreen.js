import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import TypingIndicator from './components/TypingIndicator'
import WhosOnlineList from './components/WhosOnlineList'

//import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            roomId: null,
          //  currentUser: {},
            messages: [],
            usersWhoAreTyping: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.sendTypingEvent = this.sendTypingEvent.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    } 
    sendTypingEvent() {
          this.currentUser
            .isTypingIn({ roomId: this.state.roomId })
            .catch(error => console.error('error', error))
        }
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:bb4d357a-bfef-46f3-bddb-4b90bdb33a68',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }
    
    getRooms() {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }
    
    deleteRoom(roomID){

        
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            messageLimit: 100,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                },
                onUserStartedTyping: user => {
                      this.setState({
                        usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                     })
                    },
                onUserStoppedTyping: user => {
                      this.setState({
                        usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                          username => username !== user.name
                       ),
                      })
                    },
                onUserCameOnline: () => this.forceUpdate(),
                onUserWentOffline: () => this.forceUpdate(),
                OnUserJoined: () => this.forceUpdate()
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to channel: ', err))
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }
    
    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('error with createRoom: ', err))
    }
    
    render() {
        return (
            <div className="app">
                <aside className = "whosOnlineListContainer">
                <WhosOnlineList
                    currentUser={this.state.currentUser}
                    users={this.state.users}
                />
                </aside>
                <RoomList
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    roomId={this.state.roomId} />
                <MessageList 
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage}
                    onChange={this.sendTypingEvent} />
                <NewRoomForm createRoom={this.createRoom} />
            </div>
        );
    }
}

export default App