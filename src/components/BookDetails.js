import React, { useState, useEffect } from 'react'
import axios from 'axios'


const API_URL = process.env.REACT_APP_DEV_URL


const BookDetails = (props) => {
  
  let apiId = props.match.params.bookid

  const [bookData, setBookData] = useState({})
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState(null)
  

  useEffect( async () => {
    await axios.get(`https://openlibrary.org/works/${apiId}.json`)
    .then(res => {
      setBookData(res.data)
    })
    .catch(err => console.log(err))
    setLoading(false)
  }, [])

 
  const addToList = async () => {
    await setListData(
      {
      title: `${bookData.title}`,
      cover_url: `http://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg`,
      apiKey: `${apiId}`,
      has_read: false,
      recommended: false
      }
    )
    console.log(listData)
  }

  
  useEffect(() => {
  if (listData != null) {
    axios.post(API_URL + 'books/addfave', {listData}, { withCredentials: true })
  .then(res => console.log(res))
  .catch(err => console.log(err))
  }}, [listData])


  return (
    loading ? (
      <div className="spinner-border" role="status">
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
      {bookData.description ? (
        bookData.description.value ? 
          <p>{bookData.description.value}</p>
        : <p>{bookData.description} </p>
      ) : <p>No Description Available</p>
      }
      <button className='btn-primary' onClick={addToList}>Add to My List!</button>
      </div>
    </div>
    )
  )
}

export default BookDetails
