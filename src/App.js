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

  componentDidMount() {
    const uid = localStorage.getItem('uid')
    if(uid) {
      this.setState({ uid })
    }
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
    localStorage.setItem('uid', user.uid)
    //window.localStorage.setItem('userNotes', JSON.stringify(this.state.userNotes))
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')
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
