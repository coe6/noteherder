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
        let date = new Date()
        date = date.toUTCString()

        return {
            id: null,
            title: '',
            body: '',
            timeStamp: date,
        }
    }

    saveNote = (note) => {
        let shouldRedirect = false
        const notes = [...this.state.notes]

        let date = new Date()
        date = date.toUTCString()

        if(!note.id) {
            note.id = Date.now()
            note.timeStamp = date
            notes.push(note)
            shouldRedirect = true
        } else {
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
            notes[i].timeStamp = date
        }

        this.setState({ notes })
        if(shouldRedirect) {
            this.props.history.push(`/notes/${note.id}`)
        }

        console.log(note)
    }

    deleteNote = (currentNote) => {
        const notes = [...this.state.notes]

        const index = notes.findIndex((note => note.id === currentNote.id))
        if(index > -1) {
            notes.splice(index, 1)
            this.setState({ notes })
            this.props.history.push(`/notes`)
        }
    }

    render() {
        const formProps = {
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