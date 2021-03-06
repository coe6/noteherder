import React from 'react'

import './NoteForm.css'

class NoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: this.blankNote(),
        }
    }

    componentWillReceiveProps = (newProps) => {
        const newId = newProps.match.params.id
        const i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newId)
        const note = newProps.notes[i] || this.blankNote()

        if(note) {
            this.setState({ note })
        }
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

    handleChanges = (ev) => {
        const note = {...this.state.note}
        note[ev.target.name] = ev.target.value
        this.setState(
            { note },
            () => this.props.saveNote(note)
        )
    }

    render() {
        const { currentNote, deleteNote } = this.props
        return (
        <div className="NoteForm" style={styles.noteForm}>
            <div className="form-actions" style={styles.formActions}>
                <button type="button" style={styles.button} onClick={() => deleteNote(this.state.note)}>
                    <i className="far fa-trash-alt" stlye={styles.buttonIFA}/>
                </button>
            </div>

            <form style={styles.form}>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title your note" 
                        value={this.state.note.title}
                        onChange={this.handleChanges}
                        style={styles.input}
                    />
                </p>
                <textarea 
                    name="body"
                    value={this.state.note.body}
                    onChange={this.handleChanges}
                    style={styles.textArea}
                ></textarea>
            </form>
        </div>
        )
    }
}

const styles = {
    noteForm: {
        //-ms-flex-positive: '1',
        flexGrow: '1',
        padding: '0 3rem',
    },
    formActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '-ms-flexbox',
        display: 'flex',
        //-ms-flex-line-pack: 'center',
        alignContent: 'center',
    },
    button: {
        border: 'none',
        background: 'none',
        padding: '0',
    },
    buttonSubmit: {
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem',
    },
    buttonIFA: {
        color: '#999',
        fontSize: '2rem',
        margin: '0',
    },
    form: {
        margin: '0 auto',
        maxWidth: '80rem',
    },
    input: {
        border: 'none',
        fontSize: '200%',
        fontFamily: '"Fauna One"',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
    },
    textArea: {
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3rem',
    },
}

export default NoteForm