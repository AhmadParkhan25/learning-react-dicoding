import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onDelete, onArchived}) {
    return (
        <div className="notes-list">
            {
                notes.map((note)=>(
                    <NoteItem 
                    key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    archived={note.archived}
                    onArchived={onArchived}
                    {...note} />
                ))
            }
        </div>
    )
}

export default NoteList;