import React from 'react'

import './LeftPoster.css'

const LeftPoster=()=> {
  return (
    <div className='left'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8QMiDy7TUa-EWkGtNvlEOueN0rHBgQIUllw4nQggE00hkFCm7xcOKILSrlkoJ7pHPag&usqp=CAU" alt=""/>
        <div className='play'> 
            <i className="bi bi-play-fill"></i>
        </div>
        <div className='content'>
                <h6>Directed by</h6>
                <p>Anil Ravipudi</p>
                <h6>Starring</h6>
                <p>Nandamuri Balakrishna
                    Sreeleela
                    Kajal Aggarwal
                    Arjun Rampal
                </p>
                <h6>Edited by</h6>
                <p>	Tammiraju</p>
        </div>
    </div>
  )
}

export default LeftPoster
