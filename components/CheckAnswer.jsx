import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { btnVariants } from '../utils/motion';

export default function CheckAnswer({ isEnd, clickHandler, areCorrect }) {
  const [score, setScore] = useState('0');

  useEffect(() => {
    if (isEnd) {
      setScore(areCorrect.filter((val) => (val)).length);
    }
  }, [isEnd, score]);

  return (
    <motion.div
      variants={btnVariants}
      initial="hidden"
      animate="show"
      className={`${styles.flexCenter} mt-3 md:mt-5 flex-col md:flex-row gap-4 md:gap-9`}
    >
      {isEnd && <h3 className="text-[#293264] text-[18px] dark:text-blue-500">You scored {score}/5 correct answers</h3>}
      <button
        type="button"
        onClick={clickHandler}
        className="px-[22px] py-[11px] text-[1rem] font-semibold text-[#F5F7FB] bg-[#4d5b9e] rounded-[10px] hover:bg-[hsl(230,34%,43%)] focus:bg-[hsl(230,34%,43%)] active:shadow-[inset_0_0_20px_0_rgba(0,0,0,0.3)] outline-none"
      >
        {isEnd ? 'Play Again' : 'Check Answers'}
      </button>
    </motion.div>
  );
}

