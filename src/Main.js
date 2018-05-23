import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [
                {
                    id: 1,
                    title: 'Note',
                    body: 'Body',
                },
                {
                    id: 2,
                    title: 'Note 2',
                    body: 'Body 2',
                },
                {
                    id: 3,
                    title: 'Note 3',
                    body: 'Body 3',
                },
            ]
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    blankNote = () => {
        return {
            id: null,
                title: '',
                body: '',
        }
    }

    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar resetCurrentNote={this.resetCurrentNote}/>
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote}/>
                <NoteForm currentNote={this.state.currentNote}/>
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main