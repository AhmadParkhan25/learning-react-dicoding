import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    const query = event.target.value;
    this.setState({ search: query });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id == id) {
        return {
          ...note,
          archived: !note.archived,
        };
      } else {
        return note;
      }
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const archivedNotes = this.state.notes
    .filter((note) => note.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const activeNotes = this.state.notes
      .filter((note) => !note.archived)
      .filter((note) =>
        note.title.toLowerCase().includes(this.state.search.toLowerCase())
      );

    return (
      <div className="note-app__body">
        <header className="note-app__header">
          <h1>Notes</h1>
          <input
            type="search"
            value={this.state.search}
            placeholder="cari catatan..."
            onChange={this.onSearchHandler}
          />
        </header>
        
        <h2>Buat Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        
        <h2>Catatan Aktif</h2>
        {activeNotes.length < 1 ? (
          "Tidak ada catatan"
        ) : (
          <NoteList
            notes={this.state.notes
              .filter((i) => !i.archived)
              .filter((i) =>
                i.title.toLowerCase().includes(this.state.search.toLowerCase())
              )}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
        )}
        <h2>Arsip</h2>
        {archivedNotes.length < 1 ? (
          "Tidak ada catatan"
        ) : (
          <NoteList
            notes={this.state.notes
              .filter((i) => !!i.archived)
              .filter((i) =>
                i.title.toLowerCase().includes(this.state.search.toLowerCase())
              )}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
        )}
      </div>
    );
  }
}

export default NoteApp;
