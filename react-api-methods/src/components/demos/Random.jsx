import React from 'react'

const Random = () => {
    const number = Math.random() * 10;
  return (
    <div><h1 classNameName='bg-slate-500'>Random Number is {Math.round(number)} </h1>
    </div>
        
  )
}

export default Random