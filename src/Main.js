import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './base'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [],
        }
    }

    componentWillMount() {
        base.syncState('notes', {
            context: this,
            state: 'notes',
            asArray: true,
        })
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if(!note.id) {
            note.id = Date.now()
            notes.push(note)
        } else {
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
        }

        this.setState({ notes })
        this.setCurrentNote(note)
    }

    deleteNote = (note) => {
        const notes = [...this.state.notes]
        const index = notes.findIndex((currentNote => currentNote.id === note.id))
        if(index > -1) {
            notes.splice(index, 1)
            this.setState({ notes })
        }

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
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote} 
                    signOut={this.props.signOut}
                />
                <NoteList 
                    notes={this.state.notes} 
                    setCurrentNote={this.setCurrentNote} 
                />
                <NoteForm 
                    currentNote={this.state.currentNote} 
                    saveNote={this.saveNote} 
                    deleteNote={this.deleteNote}
                />
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