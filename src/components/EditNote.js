import React, { useState } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditNote({ note }) {
    const id = useParams().noteID
    var [notes, setNotes] = useOutletContext()
    const navigate = useNavigate()
    var curNote
    var curIndex
    const [date, setDate] = useState(() => (new Date()).toISOString().slice(0,19))
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'link'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['clean']
        ]
    }

    for (var note in notes) {
        if (notes[note].id === id){
            curNote = notes[note]
            curIndex = note
        }
    }

    const [value, setValue] = useState(() => (curNote.text))
    const[title, setTitle] = useState(() => (curNote.title))
    
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

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
        curNote.date = formatDate(date)
        curNote.text = value
        curNote.title = title
        navigate('/notes/'+ id)
    }

    return (
    <div id = "metaNote">
        <div className="noteInfo">
            <div className="title-date">
                <input type="text" className="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="editDate" type="datetime-local" value={date}  onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label className="noteOption" onClick={handleSave}>Save</label>
                <label className="noteOption" onClick={handleDelete}>Delete</label>
            </div>
        </div>
        <ReactQuill className="editor-container" modules={modules}
                    theme ="snow"
                    placeholder='Your Note Here'
                    value = {value!='' ? value : ''}
                    onChange={setValue}/>
    </div>
  )
}
