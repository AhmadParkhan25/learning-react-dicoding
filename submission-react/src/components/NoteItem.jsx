import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils";

function NoteItem({title,createdAt,body, id, onDelete, archived, onArchived}){
    
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body}/>
            <div className="note-item__action">
                <DeleteButton onDelete={() => onDelete(id)} />
                <ArchiveButton onArchived={() => onArchived(id)} archived={archived} />
            </div>
        </div>
    )
}


export default NoteItem;