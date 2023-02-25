import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Layout from "./Layout";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={[<Layout />, <Navbar />]}>
          <Route path="/"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
