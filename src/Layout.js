import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Note from "./components/Note";
import NotesList from "./components/NotesList"
import {v4 as uuidv4} from'uuid';

function Layout() {
  const navigate = useNavigate();
  var [notes, setNotes] = useState([])

  useEffect (() =>{
    navigate('/notes')
  }, [])

  var activeNoteID;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  function addNote() {
    const id = uuidv4()
    setNotes(prevNotes => {
      return [...prevNotes, {id: id, title: 'Untitled', text: 'Your text here', date: 'test'}]
    }) 
    navigate('notes/'+ id + '/edit')
  }

  return (
    <>
      <div id="title">
        <h1>Lotion</h1>
        <p>Like Notion, but worse.</p>
      </div>
      <label id="menu" onClick={showSidebar}>&#9776;</label>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div id="head">
              <h2>Notes</h2>
              <label id="addNote" onClick={addNote}>+</label>
          </div>
          <ul className="nav-menu-items">
            <NotesList notes={notes} activeID={activeNoteID} />
          </ul>
      </nav>
      <div className={sidebar ? 'content menuActive' : 'content'}>
          <Outlet context={[notes, setNotes]} />
      </div>
    </>
  )
}

export default Layout