import {useState, useEffect} from 'react'
import axios from 'axios'

import FavedBooks from './FavedBooks'


const API_URL = process.env.REACT_APP_DEV_URL


const Profile = (props) => {
  
  const [user, setUser] = useState({})

  useEffect(async () => {
    await axios.get(API_URL + 'persons/profile', { withCredentials: true })
    .then(res => {
      console.log(res)
      setUser(res.data.data)
    })
    .catch(err => console.log(err))
  }, [])
  


  return (
    <div>
      {user.personname}'s Profile Page!
      <hr/>
      <FavedBooks user={user} />
    </div>
  )
}

export default Profile
