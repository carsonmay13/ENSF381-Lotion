import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Layout from "./Layout";
import NotesList from "./components/NotesList"
import Note from "./components/Note"
import EditNote from "./components/EditNote"
import ViewNote from "./components/ViewNote"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"></Route>
          <Route path="/notes" element={<div className="noSelect">Select a note, or create a new one.</div>}></Route>
          <Route path="/notes/:noteID" element={<ViewNote />}></Route>
          <Route path="/notes/:noteID/edit" element={<EditNote />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
