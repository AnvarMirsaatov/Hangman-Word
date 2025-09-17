import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { KeyBoard } from './KeyBoard'
import style from './keyBoard.module.css'

function App() {
  const [currentItem, setCurrentItem] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const wordToGuess = currentItem.word
  const question = currentItem.question

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incurrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incurrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }

    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        margin: '0 auto'
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center', height: '320px' }}>
        <h1>Hangman</h1>

        <p>{question}</p>
        <div
          style={{
            background: isLoser ? 'red' : isWinner ? 'greenyellow' : 'black',
            color: 'white',
            borderRadius: '20px',
            fontSize: '2rem',
            border: 'none'
          }}
        >
          {isWinner && 'YOU ARE WINNER! Refresh to try again'}
          {isLoser && 'NICE TRY! Refresh to try again'}
        </div>
      </div>
      <HangmanDrawing numberOfGuesses={incurrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
        <KeyBoard
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incurrectLetters}
          addGuessedLetters={addGuessedLetters}
          disabled={isWinner || isLoser}
        />

      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button
          className={style.nextBtn}
          onClick={() => window.location.reload()}
        >
          🔄 Refresh
        </button>
      </div>
    </div>
  )
}

export default App
