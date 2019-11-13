import React from 'react'

class TypingIndicator extends React.Component {
  render() {
    if (this.props.usersWhoAreTyping.length > 0) {
      return (
        <div className="Typing-Ind">
          {`${this.props.usersWhoAreTyping
            .slice(0, 2)
            .join(' and ')} is typing`}
        </div>
      )
    }
    return <p>Nobody is typing</p>
  }
}

export default TypingIndicator