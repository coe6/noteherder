import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './base'
import base from './base'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    this.setState({ uid: JSON.parse(window.localStorage.getItem('uids')) })
    //this.setState({ userNotes: JSON.parse(window.localStorage.getItem('userNotes')) })
    
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })

  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
    window.localStorage.setItem('uids', JSON.stringify(this.state.uid))
    //window.localStorage.setItem('userNotes', JSON.stringify(this.state.userNotes))
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
    window.localStorage.setItem('uids', JSON.stringify(this.state.uid))
    //window.localStorage.setItem('userNotes', JSON.stringify(this.state.userNotes))
    auth.signOut()
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn() 
            ? <Main signOut={this.signOut} uid={this.state.uid} /> 
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App
