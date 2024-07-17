import styles from "../styles/HangmanDrawing.module.css";

const CONSTRUCTION1 = <div className={styles.construction1} />;
const CONSTRUCTION2 = <div className={styles.construction2} />;
const CONSTRUCTION3 = <div className={styles.construction3} />;
const CONSTRUCTION4 = <div className={styles.construction4} />;
const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const RIGHT_ARM = <div className={styles.right_arm} />;
const LEFT_ARM = <div className={styles.left_arm} />;
const RIGHT_LEG = <div className={styles.right_leg} />;
const LEFT_LEG = <div className={styles.left_leg} />;

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
