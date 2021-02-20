import React from 'react'
import axios from 'axios'

const API_URL = process.env.REACT_APP_DEV_URL


const DeleteButton = ({bookId}) => {
  console.log(bookId)
   
  const removeBook = async () => {
   await axios.delete(API_URL + `books/faves/${bookId}`, { withCredentials: true })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    window.location.reload()
  }
  
  return (
    <>
      <button
        className='btn btn-danger'
        onClick={removeBook}
       >
      Delete
      </button>
    </>
  )
}

export default DeleteButton
