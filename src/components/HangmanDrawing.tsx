import styles from "../styles/HangmanDrawing.module.css";

const CONSTRUCTION1 = <div key={1} className={styles.construction1} />;
const CONSTRUCTION2 = <div key={2} className={styles.construction2} />;
const CONSTRUCTION3 = <div key={3} className={styles.construction3} />;
const CONSTRUCTION4 = <div key={4} className={styles.construction4} />;
const HEAD = <div key={5} className={styles.head} />;
const BODY = <div key={6} className={styles.body} />;
const RIGHT_ARM = <div key={7} className={styles.right_arm} />;
const LEFT_ARM = <div key={8} className={styles.left_arm} />;
const RIGHT_LEG = <div key={9} className={styles.right_leg} />;
const LEFT_LEG = <div key={10} className={styles.left_leg} />;

const HANGMAN_PARTS = [
  CONSTRUCTION1,
  CONSTRUCTION2,
  CONSTRUCTION3,
  CONSTRUCTION4,
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div
      className={styles.hangman_container}
      style={{
        height: "500px",
        width: "250px",
        position: "relative",
      }}
    >
      {HANGMAN_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
}
