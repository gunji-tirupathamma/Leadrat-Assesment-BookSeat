import React from 'react'
import RightPoster from './components/RightPoster/RightPoster'
import LeftPoster from './components/LeftPostere/LeftPoster'
import './App.css'

const App=()=> {
  return (
    <div>
      <div className='book'>
        <LeftPoster />
        <RightPoster />
        
      </div>
    </div>
    
  )
}

export default App
