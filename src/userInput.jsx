import React from 'react'

function userInput({Username, change}) {
  return (
    <div>
       <section className='sect'>
       <input type='text' placeholder='Enter Username' className='input' onChange={change} value={Username} />
       </section>
    </div>
  )
}

export default userInput