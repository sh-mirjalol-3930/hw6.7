import React from 'react'
import loading from './pic.png'
import './loading.css'

const Loading = () => {
  return (
    <div className='container'>
      <img className='pic' src={loading} alt="" />
    </div>
  )
}

export default Loading
