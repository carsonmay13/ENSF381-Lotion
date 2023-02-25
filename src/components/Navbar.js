import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    function addNote() {
        return;
    }

    return (
        <>
            <label id="menu" onClick={showSidebar}>&#9776;</label>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div id="head">
                    <h2>Notes</h2>
                    <label id="addNote" onClick={addNote}>+</label>
                </div>
                <ul className="nav-menu-items">
                </ul>
            </nav>
        </>
  )
}

export default Navbar