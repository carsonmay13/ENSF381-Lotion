import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
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
