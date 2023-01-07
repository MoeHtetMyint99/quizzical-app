import styles from '../styles';

export default function RadioButton({ answer, checkedAnswer, clickHandler, correctAnswer, isEnd }) {
  // const style = (checkedAnswer === answer) ? styles.checked : styles.unchecked;
  let style;

  if (isEnd) {
    // after game end
    if (checkedAnswer === answer) {
      style = `${styles.correctCheck} cursor-default`;
    } else if (answer === correctAnswer) {
      style = `${styles.wrongCheck} opacity-50 cursor-default`;
    } else {
      style = `${styles.unchecked} opacity-50 cursor-default`;
    }
    // in game
  } else if (checkedAnswer === answer) {
    style = `${styles.checked} cursor-pointer`;
  } else {
    style = `${styles.unchecked} cursor-pointer hover:bg-[hsla(229,50%,50%,0.15)]`;
  }

  return (
    <div
      className={`
        px-[19px] py-[4.5px] rounded-[8px] border-[1px] border-solid text-[hsl(231,42%,28%)] dark:text-blue-50
        ${style}
      `}
      onClick={clickHandler}
    >
      <span
        className={`
          ${styles.fonts.inter} block text-[0.75rem] tracking-wide font-medium leading-[14px]`}
      >
        {answer}
      </span>
    </div>
  );
}
