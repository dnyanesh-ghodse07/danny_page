import React from 'react'
import './Form.scss'

const Form = () => {
  return (
    <div className='form'>
      <div className="form-container">
        <div className='email-input'>
        <input type="text" placeholder='Enter Your Email !'/>
        </div>
        <div className='msg-input'>
          <textarea placeholder='Enter Your Message..' />
        </div>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Form