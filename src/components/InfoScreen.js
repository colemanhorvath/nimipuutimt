import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/InfoScreen.css'

function InfoScreen() {
  const history = useHistory()

  return (
    <div className='wrapper'>
      <div className='innerWrapper'>
        <span className='title'>Information</span>
        <div className='buttons'>
          <span className='header'>
            About Nimipuutímt
          </span>
          <span className='body'>
            Nimipuutímt, or Nez Perce, is an indigenous language of North America spoken in the state of Idaho by the Niimíipuu people, also known as the Nez Perce. The language is in the Sahaptian family and notably features polysynthesis, no fixed word order, and a tripartite case marking system.
            
          </span>
          <span className='header'>
            About This Site
          </span>
          <span className='body'>
            This website was created by an undergraduate linguistics student for a final project. Hopefully it helps some people keep this very beautiful and unique language from being forgotten. In order to report issues and mistakes or to request features, please email ceh279@cornell.edu.
            All spellings, translations, and audio come from https://www.nimipuutimt.org/. Please visit that site for more resources for learning the language.
          </span>
        </div>
      </div>
      <button
        className='back'
        onClick={() => history.goBack()}
      >
        {'Back'}
      </button>
    </div>
  )

}

export default InfoScreen