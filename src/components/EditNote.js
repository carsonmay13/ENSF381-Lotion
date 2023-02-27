import React from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';

export default function EditNote({ note }) {
    const id = useParams().noteID
    var [notes, setNotes] = useOutletContext()
    const navigate = useNavigate()
    var curNote
    var curIndex
    
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        console.log(formatted)
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    for (var note in notes) {
        if (notes[note].id === id){
            curNote = notes[note]
            curIndex = note
        }
    }
    function handleDelete(){
        const answer = window.confirm("Are you sure?");
        var temp
        if (answer) {
            notes = notes.filter(note => note.id != id)
        }
        setNotes(notes)
        navigate('/notes/')

    }

    function handleSave(){
        navigate('/notes/'+ id)
    }

    return (
    <div id = "metaNote">
        <div className="noteInfo">
            <div>
                <h2>{curNote.title}</h2>
                <small>{formatDate(new Date())}</small>
            </div>
            <div>
                <label className="noteOption" onClick={handleSave}>Save</label>
                <label className="noteOption" onClick={handleDelete}>Delete</label>
            </div>
        </div>
        <span>{curNote.text}</span>
    </div>
  )
}
