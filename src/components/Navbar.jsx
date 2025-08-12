import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeuser } from '../Utils/userslice'
import { useNavigate } from 'react-router-dom'
import { Base_Url } from '../Utils/constants'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Navbar = () => {
const user=useSelector(store =>store.user)
const navigate=useNavigate();
const  dispatch=useDispatch();
  const handlelogout=async ()=>{
    try {
      await axios.post(Base_Url + "/logout",{}, { withCredentials: true });
      dispatch(removeuser());
      return navigate("/login");
    } catch (err) {
      console.log(err)
    }

  }
  return (
   <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
  {/* <a   className="btn btn-ghost text-xl">DevTinder</a> */}
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
   
  </div>
  <div className="flex gap-2 ">
   
    {user && <p className='mx-2 my-2'>Welcome, {user.firstName} </p>}
    <div className="dropdown dropdown-end mr-6">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      
        {!user &&<div className="w-10 rounded-full">
          <img
            alt="Default Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>}

         {user &&<div className="w-10 rounded-full">
        
          <img
            alt="Profile Avatar"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        </div>}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
           
          </Link>
        </li>
         <li>
          <Link to="/connections" className="justify-between">
          Connections
           
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li ><a onClick={handlelogout} >Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar