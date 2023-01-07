import { useEffect, useRef, useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { quesContainer } from '../utils/motion';

import CheckAnswer from '../components/CheckAnswer';
import styles from '../styles';

import Question from '../components/Question';

function Questions({ data }) {
  const [isEnd, setIsEnd] = useState(false);
  const [randQues, setRandQues] = useState([]);

  // Changing to useRef from useState
  const areCorrect = useRef([false, false, false, false, false]);
  function setIsCorrect(index) {
    return (
      (correctAnswer, checkedAnswer) => {
        if (correctAnswer === checkedAnswer) {
          areCorrect.current[index] = true;
        } else areCorrect.current[index] = false;
      }
    );
  }

  function decode(encoded) {
    const elem = document.createElement('textarea');
    elem.innerHTML = encoded;
    const decoded = elem.value;
    return decoded;
  }

  function randomize(questions) {
    const checkIndex = [];
    const quesArr = [];
    // to use id as a unique key instead of index
    let id = 0;

    // producing an array of random 5 questions
    while (quesArr.length < 5) {
      const randIndex = Math.floor(Math.random() * questions.length);
      if (checkIndex.every((index) => (index !== randIndex))) {
        checkIndex.push(randIndex);

        const quest = questions[randIndex];
        // decoding
        quest.incorrect_answers = quest.incorrect_answers.map((ans) => decode(ans));
        quest.question = decode(quest.question);
        quest.correct_answer = decode(quest.correct_answer);

        // shuffling answers in new array
        const shuffledAnswers = [quest.correct_answer, ...quest.incorrect_answers]
          .sort(() => Math.random() - 0.5);
        quest.answers = shuffledAnswers;
        quest.id = id;
        quesArr.push(quest);
        id++;
      }
    }
    return (quesArr);
  }

  console.log(areCorrect);

  useEffect(() => {
    setRandQues(randomize(data));
  }, []);

  return (randQues !== []) ? (
    <motion.div
      className={`${styles.flexCenter} flex-col gap-[15px]`}
      variants={quesContainer}
      initial="hidden"
      whileInView="show"
    >
      {randQues.map((question, index) => (
        <Fragment
          key={question.id}
        >
          <Question
            {...question}
            correctAnswer={question.correct_answer}
            isEnd={isEnd}
            index={index}
            setIsCorrect={setIsCorrect(index)}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5 }}
            className="w-full self-start h-[1px] mt-[10px] bg-[#DBDEF0]"
          />
        </Fragment>
      ))}
      <CheckAnswer
        isEnd={isEnd}
        areCorrect={areCorrect.current}
        clickHandler={() => (setIsEnd((curVal) => !curVal))}
      />
    </motion.div>
  ) : null;
}

export default Questions;

