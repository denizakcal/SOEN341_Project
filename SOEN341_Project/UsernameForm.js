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
     <div className="username-form">
       <article>
        <header>
          <h1>KOADY</h1>
        </header>
        <section>
         <h2>Log in</h2>
         <form onSubmit={this.onSubmit}>
           <input
             type="text"
             placeholder="Username"
             onChange={this.onChange}
           />
           <input type="submit"/>
         </form>
         </section>
       </article>
     </div>
   )
 }
}

 export default UsernameForm