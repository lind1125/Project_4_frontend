import React from 'react'
import axios from 'axios'



const DeleteButton = ({bookId}) => {
   
  const removeBook = async () => {
   await axios.delete(process.env.REACT_APP_BACKEND_URL + `books/faves/${bookId}`, { withCredentials: true })
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
