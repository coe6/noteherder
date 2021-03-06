import React from 'react'

import { auth, githubProvider, googleProvider } from './base'
import './SignIn.css'
import googleLogo from './google.svg'
import logo from './quill.svg'

const SignIn = ({ handleAuth }) => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return (
        <div className="SignIn">

            <header className="Header">
                <img src={logo} alt="" />
                <span className="title">Noteherder</span>
            </header>
            <main>
                <h3>Hey! You Like Notes?</h3>
                <p>You never know when you'll need to write something down! In fact, you should probably be taking notes right now.</p>
                <button 
                    className="github" 
                    onClick={() => authenticate(githubProvider)}
                >
                    <i className="fab fa-github"></i>
                    Sign in with GitHub
                </button>
                <button 
                    className="google" 
                    onClick={() => authenticate(googleProvider)}
                >
                    <img src={googleLogo} alt="" />
                    Sign in with Google
                </button>
            </main>

        </div>
    )
}

export default SignIn