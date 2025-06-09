import React from 'react'

const Hello = () => {

    // variable define
    const myName = "anju"; 
    
    // method call 
    const fullName = () => {
        return 'Anju Gurung';
    }
  return (
    <div>
        Hello !! my name is {myName}. 
        My full name is {fullName()}  
    </div>
  )
}

export default Hello