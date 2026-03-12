import { ColorProvider } from "./context/ColorContext";
import NoteBoard from "./components/NoteBoard";
import ColorSelector from "./components/ColorSelector";

function App() {
  return (
    <>
      <ColorProvider>
        <div className="app-container">
          <h1>🗒️ Sticky Notes</h1>
          <ColorSelector />
          <NoteBoard />
        </div>
      </ColorProvider>
    </>
  )
}

export default App
