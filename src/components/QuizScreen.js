//ẋ
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import getQs from '../questions';
import '../style/QuizScreen.css'

function QuizScreen() {
  let { quizId } = useParams();
  let history = useHistory();
  let [i, setI] = useState(0);
  let [selected, setSelected] = useState([false, false, false, false]);
  let [qs, setQs] = useState(getQs(quizId, false));
  let [done, setDone] = useState(false);

  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='quizTitle'>{'Topic: ' + quizId}</span>
        <span className='word'>{qs[i].word}</span>
        <ul className='list'>
          <li
            className={getStyle(selected, 0, qs[i].correct, qs[i].option1)}
            onClick={() => { setSelected([!selected[0], false, false, false]) }}
          >
            {qs[i].option1}
          </li>
          <li
            className={getStyle(selected, 1, qs[i].correct, qs[i].option2)}
            onClick={() => { setSelected([false, !selected[1], false, false]); }}
          >
            {qs[i].option2}
          </li>
          <li
            className={getStyle(selected, 2, qs[i].correct, qs[i].option3)}
            onClick={() => { setSelected([false, false, !selected[2], false]); }}
          >
            {qs[i].option3}
          </li>
          <li
            className={getStyle(selected, 3, qs[i].correct, qs[i].option4)}
            onClick={() => { setSelected([false, false, false, !selected[3]]); }}
          >
            {qs[i].option4}
          </li>
        </ul>
        <button
          className='next'
          onClick={() => {
            setSelected([false, false, false, false]);
            if (done) {
              setQs(getQs(quizId, false));
              setI(0);
              setDone(false);
            } else {
              if (i + 1 < qs.length) {
                if (i + 2 === qs.length) {
                  setDone(true);
                }
                setI(i + 1);
              }
            }
          }}
          disabled={selected.every(v => !v)}
        >
          {done ? 'Restart' : 'Next'}
        </button>
        {/* <button onClick={() => alert(selected)}>Test</button> */}
        <header>{`${i + 1}/${qs.length}`}</header>
      </div>
    </div>
  )
}

function getStyle(selected, id, correct, answer) {
  let classname = 'option'
  if (selected[id]) {
    if (correct === answer) {
      classname += ' correct';
    } else {
      classname += ' incorrect';
    }
  }
  return classname;
}

export default QuizScreen