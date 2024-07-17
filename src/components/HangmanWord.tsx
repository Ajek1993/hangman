import styles from "../styles/HangmanWord.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
  isWinner?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
  isWinner = false,
}: HangmanWordProps) {
  return (
    <div className={styles.hangman_text}>
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".1em solid black",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color: isWinner
                ? "green"
                : `${
                    !guessedLetters.includes(letter) && reveal ? "red" : "black"
                  }`,
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
