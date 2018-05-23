import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <div className="notes">
                <ul id="notes">
                    <a className="active">
                        {props.notes.map(note => <Note key={note.id} note={note}/>)}
                    </a>
                </ul>
            </div>
        </div>
    )
}

const styles = {
    noteList: {
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem',
    },
    h3: {
        color: '#999',
        textTransition: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem',
    },
    ulNotes: {
        borderTop: '1px solid #eee',
        overflowy: 'scroll',
        height: 'calc(100vh - 72px',
        listStyle: 'none',
        marginTop: '1rem',
        padding: '0',
        width: '100%',
        color: '#999',
    },
    ulNotesA: {
        color: 'inherit',
        textDecoration: 'none',
    },
    ulNotesAActive: {
        color: 'inherit',
        textDecoration: 'none',
    },
    ulNotesAHover: {
        color: 'inherit',
        textDecoration: 'none',
    },
    ulNotesALink: {
        color: 'inherit',
        textDecoration: 'none',
    },
    ulNotesAVisited: {
        color: 'inherit',
        textDecoration: 'none',
    },
    li: {
        height: '100px',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    liNote: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
    },
    ulNotesAStar: {

    },
    liHover: {
        backgroundColor: '#008bf8',
    },
    aFirstofTypeLiNote: {
        borderTop: 'none',
    },
    liHoverNoteStar: {
        color: '#fff!important',
        textDecoration: 'none !important',
    },
    liHoverNote: {
        borderColor: 'transparent',
    },
    liNoteTitle: {
        color: '#4a4a4a',
        fontFamily: '"Fauna One"',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        oTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
    },
    liNoteBody: {
        height: '54px',
        overflow: 'hidden',
        marginTop: '.5rem',
    },
    liNoteBodyStar: {
        fontSize: '1rem!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
    },
    ulLiNote: {
        display: 'block',
        height: '100px',
        padding: '1rem',
        textDecoration: 'none',
    }
}

export default NoteList