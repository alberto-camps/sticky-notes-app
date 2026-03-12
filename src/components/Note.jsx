import styles from "./Note.module.css";

export const Note = ({note, onDelete}) => {
    return (
        <li style={{backgroundColor: note.color}} className={styles.note}>
            <p>{note.text}</p>
            <button onClick={() => onDelete(note.id)}>❌</button>
        </li>
    );
};