import React, { useState }  from 'react'
import axios from 'axios'

const Home = () => {

  const [bookQuery, setBookQuery] = useState('')
  const [queryData, setQueryData] = useState()

  const handleQuery = (e) => {
    setBookQuery(e.target.value)
    console.log(bookQuery)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('SUBMITTING!!!')
   await axios.get(`https://openlibrary.org/subjects/${bookQuery}.json?limit=50`)
    .then(response => setQueryData(response.data.works))
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
    {queryData &&
    <ul>
      {queryData.map((book) => {
        return (
          <li>{book.title}</li>
          )
        })}
    </ul>
      }

    </div>
  )
}

export default Home
