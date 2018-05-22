import React from 'react'

import './NoteList.css'

const NoteList = () => {
    return (
        <div className="NoteList" style={styles.noteList}>
            <h3 style={styles.h3}>Notes</h3>
            <div className="notes">
                <ul style={styles.ulNotes}>
                    <a className="active" style={styles.ulNotesA}>
                        <li style={styles.li}>
                            <div className="note" stlye={styles.liNote}>
                                <div className="noteTitle">

                                </div>
                                <div className="noteBody">
                                    <p></p>
                                </div>
                            </div>
                        </li>
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
        overFlowy: 'scroll',
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
        overFlow: 'hidden',
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
        borderColor: {
            borderColor: 'transparent',
        }
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
}

export default NoteList