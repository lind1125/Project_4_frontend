import {useState, useEffect} from 'react'
import axios from 'axios'

import FavedBooks from './FavedBooks'




const Profile = (props) => {
  
  const [user, setUser] = useState({})

  useEffect(async () => {
    await axios.get(process.env.REACT_APP_BACKEND_URL + 'persons/profile', { withCredentials: true })
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
