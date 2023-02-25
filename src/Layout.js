import React from 'react'
import { Outlet } from "react-router-dom";

function Layout() {
    return (
    <>
    <div id="title">
      <h1>Lotion</h1>
      <p>Like Notion, but worse.</p>
    </div>
    <div className="content">
        <Outlet />
    </div>
  </>
  )
}

export default Layout