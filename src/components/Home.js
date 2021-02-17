import React, { useState }  from 'react'
import axios from 'axios'

const Home = () => {

  const [bookQuery, setBookQuery] = useState('')

  const handleQuery = (e) => {
    setBookQuery(e.target.value)
    console.log(bookQuery)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTING!!!')
    axios.get(`https://openlibrary.org/subjects/${bookQuery}.json?limit=50`)
    .then(response => console.log('response:', response.data.works))
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
      <input 
        type='text'
        onChange={handleQuery}
      />
      <button 
        type='submit' 
      >
        Find Books!
      </button>
      </form>
    </div>
  )
}

export default Home
