import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = process.env.REACT_APP_DEV_URL


const ReadButton = ({book}) => {
  

  const [data, setData] = useState(
    {
      title:book.title,
      cover_url:book.cover_url,
      apiKey: book.apiKey,
      has_read: book.has_read,
      recommended: book.recommended
    }
  )
  
  console.log(data.has_read)
 
  const updateReadStatus = () => {
    setData({...data, has_read: true})
    console.log('updated:', data)
    axios.put(API_URL + `books/faves/${book.id}`, {data}, { withCredentials: true } )
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  return (
    <>
      <button type="button" className="btn btn-info" 
      onClick={updateReadStatus}
      >
        I've Read This
      </button>
    </>
  )
}

export default ReadButton
