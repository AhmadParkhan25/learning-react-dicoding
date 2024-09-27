import React from "react";


function ArchiveButton({id, onArchived}) {
    return (
        <button className="note-item__archive-button" onClick={()=>onArchived(id)}>Arsipkan</button>
    )
}



export default ArchiveButton;