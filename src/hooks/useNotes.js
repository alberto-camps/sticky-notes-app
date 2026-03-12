import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useNotes(initialValue = []) {
    const [notes, setNotes] = useState(initialValue);
    const addNote = (text, color) => {
        if (notes.length >= 10) {
            alert('Máximo 10 notas!!')
        } else {
            const newNote = {id: uuidv4(), text, color};
            setNotes([...notes, newNote]);
        }
    };
    const deleteNote = (id) => setNotes(notes.filter(note => note.id !== id));
    return { notes, addNote, deleteNote };
}

export default useNotes;