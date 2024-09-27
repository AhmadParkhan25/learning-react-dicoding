import React from "react";


function ArchiveButton({archived, onArchived}) {
    return (
        <button className="note-item__archive-button" onClick={()=>onArchived(archived)}>Arsipkan</button>
    )
}



export default ArchiveButton;