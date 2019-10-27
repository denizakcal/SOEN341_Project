import React from 'react'
class SendMessageForm extends React.Component{
    
    constructor(){
        super()
        this.state={
            message:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            message:e.target.value// updating the state
        })
     }  
     
     handleSubmit(e){
        e.preventDefault() 
        this.props.SendMessage(this.state.message)//restoring the message in the state (inverse dataflow)
        this.setState({message: ''})//clear the message form after sending a message
    }
    //react trigers render method to update the UI by going through the state
    render(){
        console.log(e.target.value)//just for testing purpose
        return(
            <form onSubmit={this.handleSubmit}
            className="send-message-form">
                <input //take the user input and shove it into the state of SendMessageForm
                disabled={this.props.disabled}//can't write anything before joinning a room
                    onChange={this.handleChange}//onchange is listening for event changes and handle whenever the input changes
                    value={this.state.message}//the value can only be whatever we have in the state
                    placeholder="Type your message and press enter to send it"
                    type="text"/>
            </form>
        )
    }
}