import React from 'react'

const FormGroup = ({children, text}) => {
  return (
    <div>
      <div className='form-group'>
        {/* Upper cased the first letter then added the rest of the letters */}
          <label htmlFor={text}>{text.slice(0,1).toUpperCase() + text.slice(1, text.length) }</label>
          {children}
      </div>
    </div>
  )
}

export default FormGroup