import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'


class Main extends React.Component {
    constructor() {
        super()

        const storedNotes = JSON.parse(localStorage.getItem('notes'))

        this.state = {
            currentNote: this.blankNote(),
            notes: storedNotes,
        }
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

        localStorage.setItem('notes', JSON.stringify(notes))
        const storedNotes = JSON.parse(localStorage.getItem('notes'))
        console.log(storedNotes)
        this.setState({ notes: storedNotes })
        this.setCurrentNote(note)
    }

    deleteNote = (note) => {
        const notes = [...this.state.notes]
        const index = notes.findIndex((currentNote => currentNote.id === note.id))
        notes.splice(index, 1)

        this.setState({ notes })
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
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote} />
                <NoteForm currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote}/>
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