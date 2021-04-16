import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/HomeScreen.css'

function HomeScreen() {
  const history = useHistory()

  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='title'>Nimipuutímt Vocabulary Quiz</span>
        <div className='buttons'>
          <span
            className='button play'
            onClick={() => history.push('/select')}
          >
            Play
          </span>
          <span
            className='button info'
            onClick={() => history.push('/info')}
          >
            Info
          </span>
        </div>
      </div>
    </div>
  )

}

export default HomeScreen