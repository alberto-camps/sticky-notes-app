import { useContext, useState, useEffect } from "react";
import useNotes from "../hooks/useNotes";
import { ColorContext } from "../context/ColorContext";
import { Note } from "./Note";
import { v4 as uuidv4 } from "uuid";

const NoteBoard = () => {
    const { color } = useContext(ColorContext);
    const { notes, addNote, deleteNote } = useNotes(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []);
    const [text, setText] = useState("");
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addNote(text, color);
            setText("");
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Escribe una nota..." id="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button type="submit">+</button>
            </form>
            <ul>
                {notes.length > 0 ? notes.map(note => <Note key={note.id} note={note} onDelete={deleteNote} />) : <p>No hay notas</p>}
            </ul>
        </>
    );
};

export default NoteBoard;