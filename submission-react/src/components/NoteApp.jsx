import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

function NoteApp () {
    const notes = getInitialData();

    return (
        <div>
            <h1>Catatan Aktif</h1>
            <NoteList notes={notes}/>
        </div>
    )

}

export default NoteApp;