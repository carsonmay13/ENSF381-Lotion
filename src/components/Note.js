import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function Note({ id, title, text, date }) {
  const navigate = useNavigate()
  let activeID  = useParams()
  function viewNote() {
    navigate('/notes/' + id )
  }
  return (
    <div className = {id === activeID.noteID ? "note active" : "note"} onClick={viewNote}>
      <h3>
        {title}
      </h3>
      <small>{date}<br/></small>
      <span>
          {text}
      </span>
    </div>
  )
}
