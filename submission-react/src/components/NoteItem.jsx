import React from "react";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utils";

function NoteItem({title,createdAt,body}){
    const date = showFormattedDate();
    
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt = date} body={body}/>
        </div>
    )
}


export default NoteItem;