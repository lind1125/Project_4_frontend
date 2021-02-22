import { useState } from 'react'
import axios from 'axios'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'

// Component
import FormGroup from './common/FormGroup'



const Login = () => {
  const [formData, setFormData] = useState({email:'', password:''})

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTING!!!')
    axios.post(process.env.REACT_APP_BACKEND_URL + 'persons/login', {formData}, { withCredentials: true })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='col-md-12'>
     <div className='card card-container'>
      <Form onSubmit={handleSubmit}>
        <FormGroup text='email'>
            <Input
              type='text'
              className='form-control'
              name='email'
              value={formData.email}
              onChange={handleChange}
              // validations={[required]}
            />
          </FormGroup>
        <FormGroup text='password'>
            <Input
              type='password'
              className='form-control'
              name='password'
              value={formData.password}
              onChange={handleChange}
              // validations={[required]}
            />
          </FormGroup>
          <button type='submit'>Log In</button>
      </Form>
     </div>
    </div>
  )
}

export default Login
