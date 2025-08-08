import React, { useEffect } from 'react'
import Editprofile from './Editprofile'
import { useSelector } from 'react-redux'

const Profile = () => {


  const user=useSelector((state) => state.user);
  return (
    <div>
     { user && <Editprofile user={user}/>}
    </div>
  )
}

export default Profile