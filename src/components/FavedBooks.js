import axios from 'axios'
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'
// import BookDetails from './BookDetails'
import DeleteButton from './common/DeleteButton'
import ReadButton from './common/ReadButton'



const FavedBooks = ({user}) => {
  
  
  const [faveList, setFaveList] = useState([])

  useEffect(() => {
      axios.get(process.env.REACT_APP_BACKEND_URL + 'books/faves', { withCredentials: true })
      .then(res => {
        setFaveList(res.data.data)
      })
      .catch(err => console.log(err))
    }, [])

 
  return (
    <div>
      <h3>My List</h3>
      {faveList &&
    <div className='card-group'>
      {faveList.map((book, index) => {
        return (
          book.has_read ?
          <div 
          className='card w-25 col-3' key={index}>
            <div className='card-body'>
              <img className='card-img-top' src={book.cover_url} />
            </div>
              <div className='card-footer'>
              <h5 className='text-success'>  
              {book.title}
              </h5>
              <DeleteButton bookId={book.id} />
              {/* <ReadButton book={book} /> */}
              </div>
      </div>
       :   <div 
          className='card w-25 col-3' key={index}>
            <div className='card-body'>
              <img className='card-img-top' src={book.cover_url} />
            </div>
              <div className='card-footer'>
              <h5>  
              {book.title}
              </h5>
              <DeleteButton bookId={book.id} />
              <ReadButton book={book} />
              </div>
      </div>
        )
      })}
    </div>
  }
    </div>
  )
}

export default FavedBooks
