import React, { useEffect, useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar, 
  Code, 
  FileText, 
  Users, 
  Camera, 
  Save,
  CheckCircle
} from 'lucide-react';
import axios from 'axios';
import { Base_Url } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { adduser } from '../Utils/userslice';
import UserProfile from './UserProfile';


export default function EditableProfileCard({user}) {


  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  // const [skills, setSkills] = useState(user?.skills);
  // Always keep two states: one array for rendering, one string for input
const [skills, setSkills] = useState(Array.isArray(user?.skills) ? user.skills : []);
const [skillsInput, setSkillsInput] = useState(
  Array.isArray(user?.skills) ? user.skills.join(", ") : (user?.skills || "")
);

  const [description, setDescription] = useState(user?.description);
  const [profileUrl, setProfileUrl] = useState(user?.profileUrl);
  const [gender, setGender] = useState(user?.gender);
  const [showToast, setShowToast] = useState(false);
  const [Preview,setPreview] = useState(false);
  const dispatch = useDispatch();

console.log(skills);

 
const handleSave = async() => {

try {
  const res=await axios.patch(Base_Url + "/profile/edit",{
      firstName,
      lastName,
      age,
      skills,
      description,
      profileUrl,
      gender
    },{
      withCredentials: true
    });

    dispatch(adduser(res?.data?.user));
     console.log(res?.data?.user);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
} catch (err) {
  console.error(err);
}
};






const handlepreview =()=>{
  setPreview(true);
}
const handlepreview2 =()=>{
  setPreview(false);
}

  return (
    <>
{
Preview && (
  <>
  <UserProfile user={{ firstName,
      lastName,
      age,
      skills,
      description,
      profileUrl,
      gender}}/>
      <div className="flex justify-center pt-5 md:mb-0 mb-20  ">
              <button
               
                className="group relative cursor-pointer px-6 py-3 bg-gradient-to-r from-green-800 via-green-700 to-green-600  text-white font-bold rounded-2xl shadow-lg hover:shadow-xl"
              >
                <div onClick={handlepreview2}   className="flex items-center gap-3">
                  <Save size={20} />
                  Done
                </div>
               
              </button>
             
            </div>
      </>
)
}




     { !Preview && (<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">

 {showToast && (
    <div className="fixed top-5 left-1/2 -translate-x-1/2  w-[90%] sm:w-auto max-w-sm bg-white dark:bg-gray-800  border border-green-500/30 text-gray-900 dark:text-white  px-5 py-3 rounded-xl shadow-lg z-50 flex items-center gap-3">
    <CheckCircle className="text-green-500 flex-shrink-0" size={22} />
    <span className="text-sm sm:text-base font-medium">
      Profile saved successfully!
    </span>
   </div>
  )}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Update your information and showcase your skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Image Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 h-fit sticky top-8">
              <div className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <img
                    src={profileUrl}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Camera className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Profile Image URL
                    </label>
                    <input
                      type="url"
                      value={profileUrl}
                      onChange={(e) => setProfileUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                    />
                  </div>
                  
                  {/* Live Preview Name */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {firstName} {lastName}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                  <User className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  />
                </div> 
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Users size={16} className="inline mr-2" />
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2  border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
                  <Code className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Details</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Skills & Technologies
                  </label>
                  {/* <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="React, Node.js, Python, etc."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  /> */}
                  <input type="text"  value={skillsInput}  onChange={(e) => {
                    const value = e.target.value; 
                    setSkillsInput(value);
                    setSkills(value.split(",").map(s => s.trim()).filter(Boolean) ); }} placeholder="React, Node.js, Python, etc."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"/>
                    <div className="mt-4 flex flex-wrap gap-2">
                    {(Array.isArray(skills) ? skills : skills.split(',')) .map((skill, index) => skill.trim() && (
                  <span
                     key={index}
                     className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 
                     dark:from-blue-900 dark:to-purple-900 text-blue-800 
                     dark:text-blue-200 rounded-full text-sm font-medium 
                     border border-blue-200 dark:border-blue-700"
                   >
                 {skill.trim()}
                  </span> ))}</div>
                </div> 
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <FileText size={16} className="inline mr-2" />
                    Professional Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Tell us about your professional background, experience, and interests..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mb-10 gap-3">
              <button
               
                className="group relative cursor-pointer px-6 py-1 md:py-3 bg-gradient-to-r from-green-800 via-green-700 to-green-600  text-white font-bold rounded-2xl shadow-lg hover:shadow-xl"
              >
                <div  onClick={handleSave} className="flex items-center gap-3">
                  <Save size={20} />
                  Save Profile
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
              <button
               
                className="group relative cursor-pointer px-6 py-1  md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl "
              >
                <div  onClick={handlepreview} className="flex items-center gap-3">
                  <Save size={20} />
                  Preview Profile
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
    </>
  );
}