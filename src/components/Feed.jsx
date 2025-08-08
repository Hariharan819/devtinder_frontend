import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Base_Url } from '../Utils/constants';
import UserProfile from './UserProfile';
import { addfeed } from '../Utils/feedslice';

const Feed = () => {


const feed = useSelector(store => store.feed);
const  dispatch=useDispatch();
const fetchfeeduser=async()=>{
  if(feed) return;
  try { 
    const userfeed=await axios.get(Base_Url + "/feed",{ withCredentials: true });
  
    dispatch(addfeed(userfeed?.data?.data));
      console.log(userfeed?.data?.data);
  } 
  catch (err) {

  }
};
useEffect(() => {
  fetchfeeduser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
 return (
    feed && (<div>
      <UserProfile user={feed[0]}/>

    </div>)
  )
}

export default Feed