import { useState } from "react"
import words from './wordList.json'
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { KeyBoard } from "./KeyBoard"
function App() {
  const [wordToGoess, setWordToGoess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [gouessedLetters, setGoussedLetters] = useState<string[]>([])
  console.log(wordToGoess);
  console.log(gouessedLetters);

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      margin: '0 auto'
    }}>
      <div style={{ fontSize: '2rem', textAlign: "center" }}>
        Lose
        Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <KeyBoard />
    </div>
  )
}

export default App
