export function HangmanWord() {
    const word = 'test'
    const gouessedLetters = ['s']
    return (
        <div
            style={{
                display: 'flex',
                gap: '.25em',
                fontSize: '6rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontFamily: 'monospace'
            }}
        >
            {word.split('').map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style={{
                        visibility: gouessedLetters.includes(letter)
                            ? "vesibility"
                            : "hidden"
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
