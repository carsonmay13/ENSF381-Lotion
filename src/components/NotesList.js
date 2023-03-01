import React from "react";
import Note from "./Note";

export default function NotesList({ notes }) {
  return (
    <ol className="notesList">
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          key={note.id}
        />
      ))}
    </ol>
  );
}
