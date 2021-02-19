import {useState, useEffect} from 'react'
import axios from 'axios'

const API_URL = process.env.REACT_APP_DEV_URL


const Profile = (props) => {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(API_URL + 'persons/profile', { withCredentials: true })
    .then(res => {
      console.log(res)
      setUser(res.data.data)
      console.log('user:', user)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      {user.personname}'s Profile Page!
    </div>
  )
}

export default Profile
