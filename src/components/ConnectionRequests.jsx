import axios from 'axios'
import React, { use } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addconnectionrequest } from '../Utils/connectionrequestslice';
import { Base_Url } from '../Utils/constants';
import { User, Briefcase, Calendar } from "lucide-react";
const ConnectionRequests = () => {

const dispatch = useDispatch();
const requests=useSelector((state) => state.connectionrequests);

  const fetchConnectionRequests = async () => {
    try {
      
      const response=await axios.get( Base_Url + "/user/requests/received",{withCredentials:true})
      dispatch(addconnectionrequest(response?.data?.data));
      console.log(response?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  
  fetchConnectionRequests();
}, []);

if (!requests || requests.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No connectionsRequests found</p>;
  }

 return (
  <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="grid gap-4 sm:gap-6 justify-center  md:max-w-xl mx-auto grid-cols-1 ">
      {requests.map((connection) => {
        const initials = `${connection.fromUserId.firstName?.[0] || ""}${connection.fromUserId.lastName?.[0] || ""}`;
        return (
          <div
            key={connection.fromUserId._id}
            className="group cursor-pointer transition-all duration-300 
                       
                       bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700 
                       rounded-lg"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                {/* Avatar Section */}
                <div className="relative">
                  <div className="h-16 w-16 rounded-full ring-2 ring-primary/20 
                                  transition-all duration-300 
                                   overflow-hidden 
                                
                                  flex items-center justify-center">
                    {connection.fromUserId.profileUrl ? (
                      <img
                        src={connection.fromUserId.profileUrl}
                        alt={`${connection.fromUserId.firstName} ${connection.fromUserId.lastName}`}
                        className="h-full w-full object-cover"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    ) : (
                      <span className="text-white font-semibold text-lg">
                        {initials}
                      </span>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-primary rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <User className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100  transition-colors duration-300">
                      {connection.fromUserId.firstName} {connection.fromUserId.lastName}
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {connection.fromUserId.gender}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-400">
                    <Briefcase className="h-4 w-4" />
                    <p className="text-sm font-medium truncate">{connection.fromUserId.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{connection.fromUserId.age} years old</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

}

export default ConnectionRequests