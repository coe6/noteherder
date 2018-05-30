import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        })
    }

    blankNote = () => {
        return {
            id: null,
                title: '',
                body: '',
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    saveNote = (note) => {
        let shouldRedirect = false
        const notes = [...this.state.notes]

        if(!note.id) {
            note.id = Date.now()
            notes.push(note)
            shouldRedirect = true
        } else {
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
        }

        this.setState({ notes })
        if(shouldRedirect) {
            this.props.history.push(`/notes/${note.id}`)
        }
    }

    deleteNote = (currentNote) => {
        const notes = [...this.state.notes]
        const id = this.props.match.params.id

        const index = notes.findIndex((note => note.id === currentNote.id))
        if(index > -1) {
            notes.splice(index, 1)
            this.setState({ notes })
            this.props.history.push(`/notes`)
        }
    }

    render() {
        const formProps = {
            currentNote: this.state.currentNote,
            saveNote: this.saveNote,
            deleteNote: this.deleteNote,
            notes: this.state.notes,
        }
        return (
            <div className="Main" style={style}>
                <Sidebar
                    signOut={this.props.signOut}
                />
                <NoteList 
                    notes={this.state.notes}
                />
                <Switch>
                    <Route 
                        path="/notes/:id" 
                        render={(navProps) => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                    <Route
                        render={(navProps) => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                </Switch>
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