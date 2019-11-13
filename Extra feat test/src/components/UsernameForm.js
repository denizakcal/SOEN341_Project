import React, { Component } from 'react'

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }
onSubmit(e) {
  e.preventDefault()
  this.props.onSubmit(this.state.username)
}

onChange(e) {
   this.setState({ username: e.target.value })
 }
 render() {
  return (
   
   <div className="Login-page">
      <h1>
        KOADY
      </h1>       
     <div className ="form">
       <h2>
         W E L C O M E !
       </h2>
       <form onSubmit={this.onSubmit}>
         <input
           type="text"
           placeholder="Username" 
           onChange={this.onChange}
         />
         
         <input type="submit" value = "Submit" />
       </form>
     </div>
   </div> 
 )
}
}

 export default UsernameForm