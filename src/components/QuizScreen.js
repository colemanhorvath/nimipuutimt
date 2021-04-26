//ẋ
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getQs, getEnglish } from '../questions';
import '../style/QuizScreen.css';
import getSound from '../audio';

function QuizScreen() {
  let { quizId, isEng } = useParams();
  const isEnglish = isEng === 'true';
  let history = useHistory();
  let [i, setI] = useState(0);
  let [selected, setSelected] = useState([false, false, false, false]);
  let [qs, setQs] = useState(getQs(quizId, isEnglish));
  let [done, setDone] = useState(false);
  let [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!muted && !isEnglish) {
      const a = getSound(qs[i].correct);
      if (a && !muted) { a.play(); }
    }
  }, [i]);


  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='quizTitle'>{'Topic: ' + quizId}</span>
        <span className='word'
          onClick={() => {
            if (!muted && !isEnglish) {
              const a = getSound(qs[i].correct);
              if (a && !muted) { a.play(); }
            }
          }}
        >
          {qs[i].word}
        </span>
        <button
          className='mute'
          onClick={() => setMuted(!muted)}
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
        <ul className='list'>
          <li
            className={getStyle(selected, 0, qs[i].correct, qs[i].option1)}
            onClick={() => {
              if (!muted && isEnglish) {
                let s = getSound(getEnglish(quizId, qs[i].option1));
                if (s) { s.play(); }
              }
              setSelected([!selected[0], false, false, false])
            }}
          >
            {qs[i].option1}
          </li>
          <li
            className={getStyle(selected, 1, qs[i].correct, qs[i].option2)}
            onClick={() => {
              if (!muted && isEnglish) {
                let s = getSound(getEnglish(quizId, qs[i].option2));
                if (s) { s.play(); }
              }
              setSelected([false, !selected[1], false, false]);
            }}
          >
            {qs[i].option2}
          </li>
          <li
            className={getStyle(selected, 2, qs[i].correct, qs[i].option3)}
            onClick={() => {
              if (!muted && isEnglish) {
                let s = getSound(getEnglish(quizId, qs[i].option3));
                if (s) { s.play(); }
              }
              setSelected([false, false, !selected[2], false]);
            }}
          >
            {qs[i].option3}
          </li>
          <li
            className={getStyle(selected, 3, qs[i].correct, qs[i].option4)}
            onClick={() => {
              if (!muted && isEnglish) {
                let s = getSound(getEnglish(quizId, qs[i].option4));
                if (s) { s.play(); }
              }
              setSelected([false, false, false, !selected[3]]);
            }}
          >
            {qs[i].option4}
          </li>
        </ul>
        <button
          className='next'
          onClick={() => {
            setSelected([false, false, false, false]);
            if (done) {
              setQs(getQs(quizId, isEnglish));
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