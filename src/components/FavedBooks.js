import axios from 'axios'
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'
import BookDetails from './BookDetails'
import DeleteButton from './common/DeleteButton'

const API_URL = process.env.REACT_APP_DEV_URL


const FavedBooks = ({user}) => {
  
  
  const [faveList, setFaveList] = useState([])

  useEffect(() => {
      axios.get(API_URL + 'books/faves', { withCredentials: true })
      .then(res => {
        setFaveList(res.data.data)
      })
      .catch(err => console.log(err))
    }, [])

 
  return (
    <div>
      <h3>My List</h3>
      {faveList &&
    <ul >
      {faveList.map((book, index) => {
        console.log(book)
        return (
          <div className='card w-25' key={index}> 
            <div className='card-body'>
              <img className='card-img-top' src={book.cover_url} />
              <h5>  
              {book.title}
              </h5>
              <DeleteButton bookId={book.id} />
            </div>
      </div>
        )
      })}
    </ul>
  }
    </div>
  )
}

export default FavedBooks
