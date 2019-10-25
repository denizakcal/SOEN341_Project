import React from 'react'
class SendMEssageForm extends React.Component{
    handleChange(e){
        console.log(e.target.value)//for testing purpose
    }
    render(){
        return(
        //basic setup
            <form className="send-message-form">
                <input 
                    onchange={this.handleChange}//event handling whenever the input changes
                    placeholder="Type your message and press enter to send it"
                    type="text"/>
            </form>
        )
    }
}