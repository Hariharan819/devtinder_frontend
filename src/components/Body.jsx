import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer'
import axios from 'axios'
import {Base_Url} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../Utils/userslice'

const Body = () => {

const dispatch = useDispatch();
const navigate = useNavigate(); 
const user=useSelector((state) => state.user);
  const fetchuser = async () => {
    if(user) return
    try {
      const res=await axios.get( Base_Url + "/profile/view" ,{withCredentials: true});
      dispatch(adduser(res.data));
    } catch (err) {
      console.error("Failed to fetch user:", err);
      if (err.response && err.response.status === 401) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    fetchuser();    
  }, []);

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
 </>
 
  )
}

export default Body