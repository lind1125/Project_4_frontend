import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookDetails = (props) => {
  console.log(props)
  
  let apiId = props.match.params.bookid
  
  console.log(apiId)

  const [bookData, setBookData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect( async () => {
    // setLoading(true)
    await axios.get(`https://openlibrary.org/works/${apiId}.json`)
    .then(res => {
      setBookData(res.data)
    })
    .catch(err => console.log(err))
    setLoading(false)
  }, [])
  
  console.log(bookData)
  
  return (
    loading ? (
      <div class="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
    <div className='card w-75'>
      <img 
      className='card-img-top' 
      src={`http://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg`}
      />
      <div className='card-body'>
      <h5>{bookData.title}</h5>
      <p>{bookData.description}</p>
      </div>
    </div>
    )
  )
}

export default BookDetails
