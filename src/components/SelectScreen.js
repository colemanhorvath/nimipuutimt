import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, useHistory, useRouteMatch, Link } from 'react-router-dom';
import QuizScreen from './QuizScreen'
import '../style/SelectScreen.css'

function SelectScreen() {
  const history = useHistory();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <QuizSelect url={url} />
        </Route>
        <Route path={`${path}/:quizId`}>
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

function QuizSelect({ url }) {
  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='select'>Select a quiz</span>
        <ul className='quizlist'>
          <li className='item'>
            <Link
              to={`${url}/greetings`}
              className='link'
            >
              <button className='quizButton'>
                Greetings
              </button>
            </Link>
          </li>
          <li className='item'>
            <Link
              to={`${url}/time`}
              className='link'
            >
              <button className='quizButton'>
                Time
              </button>
            </Link>
          </li>
          <li className='item'>
            <Link
              to={`${url}/weather`}
              className='link'
            >
              <button className='quizButton'>
                Weather
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SelectScreen