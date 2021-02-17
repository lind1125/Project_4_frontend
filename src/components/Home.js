import React, { useState }  from 'react'

const Home = () => {

  const [bookQuery, setBookQuery] = useState('')

  const handleQuery = (e) => {
    setBookQuery(e.target.value)
    console.log(bookQuery)
  }

  return (
    <div>
      <form>
      <input 
        name='booksearch' 
        type='search'
        onChange={handleQuery}
      />
      <button 
        type='submit' 
        onSubmit={handleSubmit}
      >
        Find Books!
      </button>
      </form>
    </div>
  )
}

export default Home
