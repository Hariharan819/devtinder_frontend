import React from 'react';
import { Mail, User, Calendar, Award } from 'lucide-react';

export default function UserProfile( { user }) {
 console.log(user);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md md:mt-20 mt-10  lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
    
      
      {/* Profile section */}
      <div className="relative px-4 mt-14 md:mt-0 sm:px-6 pb-4 sm:pb-6 md:p-6">
        {/* Mobile Profile Layout */}
        <div className="md:hidden">
          {/* Profile image - positioned to overlap header */}
          <div className="flex justify-center -mt-10 sm:-mt-12 mb-3 sm:mb-4">
            <div className="relative">
              <img
                src={user.profileUrl}
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
          </div>

          {/* Name and description */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
              {user.description}
            </p>
          </div>

          {/* User details with icons */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Gender</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{user.gender}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Age</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{user.age}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div>
            <div className="flex items-center space-x-2 mb-2 sm:mb-3">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-500 flex-shrink-0" />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                Skills & Expertise
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="group bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-full border border-indigo-200 dark:border-indigo-700 transition-all duration-200 hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/50 dark:hover:to-purple-800/50 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-200 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 active:scale-95">
              Interested
            </button>
            <button className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-all duration-200 hover:from-red-600 hover:to-rose-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 active:scale-95">
              Not Interested
            </button>
          </div>
        </div>

        {/* Desktop Profile Layout - Simple/Original Design */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={user.profileUrl}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-indigo-500"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.description}
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
            <p><span className="font-semibold">Email:</span> {user.emailId}</p>
            <p><span className="font-semibold">Gender:</span> {user.gender}</p>
            <p><span className="font-semibold">Age:</span> {user.age}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Skills:
            </h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Action buttons */}
          <div className="flex gap-3">
            <button className="flex-1 cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Interested
            </button>
            <button className="flex-1 cursor-pointer bg-gradient-to-r from-red-500 to-rose-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:from-red-600 hover:to-rose-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}