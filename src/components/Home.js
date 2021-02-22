import React, { useState }  from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Home = (props) => {
  console.log(props)
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
    .then(response => {
      setQueryData(response.data.works)
      console.log(response.data)
    }
    )}

  return (
    <div>
      <h1>Booxploration</h1>
      <form className='mb-5'  onSubmit={handleSubmit}>
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
      {queryData.map((book, index) => {
        return (
          <Link  to={ { pathname:`/books/${book.key.slice(7)}`} } key={index} >
            <div>
              <img src={`http://covers.openlibrary.org/b/id/${book.cover_id}-S.jpg`} />
              <h3>  
              {book.title}
              </h3>
            </div>
          </Link>
        )
          })}
    </ul>
  }

    </div>
  )
}

export default Home
