import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, useHistory, useRouteMatch, Link } from 'react-router-dom';
import QuizScreen from './QuizScreen';
import '../style/SelectScreen.css'

function SelectScreen() {
  const history = useHistory();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <QuizSelect url={url} history={history} />
        </Route>
        <Route path={`${path}/:quizId/:isEng`}>
          <QuizScreen />
        </Route>
      </Switch>
      <button
        className='back'
        onClick={() => history.goBack()}
      >
        {'Back'}
      </button>
    </div>
  )
}

function QuizSelect({ url, history }) {
  let [isEnglish, setIsEnglish] = useState(false);
  let quizzes = ['greetings', 'time', 'weather', 'audio'];
  let [quizName, setQuizName] = useState();

  let changeInput = (event) => {
    setQuizName(event.target.value);
  }

  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='select'>Select a quiz</span>
        <button
          className='lang button'
          onClick={() => setIsEnglish(!isEnglish)}
        >
          {"Select language direction: \n" +
            (isEnglish ? 'English => Nimipuutímt' : 'Nimipuutímt => English')}
        </button>
        <QuizList quizzes={quizzes} url={url} isEnglish={isEnglish} />
        <span className='asterisk'>
          Please note that audio is currently only available in the "Audio" quiz
        </span>
      </div>
    </div>
  )
}

function QuizList(props) {
  return (
    <ul className='quizlist'>
      {props.quizzes.map(name =>
        <li className='item'>
          <Link
            to={`${props.url}/${name}/${props.isEnglish}`}
            className='link'
          >
            <button className='quiz button'>
              {name}
            </button>
          </Link>
        </li>)
      }
    </ul>
  )
}

export default SelectScreen