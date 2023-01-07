import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { quesVariants } from '../utils/motion';
import RadioButton from './RadioButton';
import styles from '../styles';

export default function Question({ answers, index, question, correctAnswer, setIsCorrect, isEnd }) {
  const [checkedAnswer, setCheckedAnswer] = useState('');

  // function clickHandler(answer) {
  //   setCheckedAnswer(answer);
  // }

  useEffect(() => {
    if (checkedAnswer !== '') {
      setIsCorrect(correctAnswer, checkedAnswer);
    }
  }, [checkedAnswer]);

  return (
    <motion.div
      className="w-full flex align-baseline text-base lg:text-[1.25rem] leading-[1.3em] text-[hsl(231,42%,28%)] dark:text-blue-400 mt-[20px]"
      variants={quesVariants}
    >
      <span className="mr-2">{ index + 1 }.</span>
      <div>
        <p className={`${styles.fonts.karla} max-w-[30em] mb-[12px] font-bold dark:ts drop-shadow-2xl shadow-red-500`}>
          {question}
        </p>
        <div className="flex justify-start items-center flex-wrap gap-[13px]">
          {answers.map((answer, index2) => (
            <RadioButton
              key={index2}
              answer={answer}
              correctAnswer={correctAnswer}
              checkedAnswer={checkedAnswer}
              clickHandler={() => (!isEnd && setCheckedAnswer(answer))}
              isEnd={isEnd}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
