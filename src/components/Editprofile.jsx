import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar, 
  Code, 
  FileText, 
  Users, 
  Camera, 
  Save,
  MapPin,
  Phone,
  Globe
} from 'lucide-react';

export default function EditableProfileCard() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [emailId, setEmailId] = useState('john@example.com');
  const [age, setAge] = useState(25);
  const [skills, setSkills] = useState('React, TailwindCSS, JavaScript');
  const [description, setDescription] = useState('Frontend Developer passionate about creating beautiful user experiences');
  const [profileUrl, setProfileUrl] = useState('https://via.placeholder.com/150');
  const [gender, setGender] = useState('Male');

  const handleSave = () => {
    console.log('Profile Saved:', {
      firstName,
      lastName,
      emailId,
      age,
      skills,
      description,
      profileUrl,
      gender
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
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
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
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
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="React, Node.js, Python, etc."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-600 transition-all outline-none"
                  />
                  
                  {/* Skill Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.split(',').map((skill, index) => (
                      skill.trim() && (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {skill.trim()}
                        </span>
                      )
                    ))}
                  </div>
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
            <div className="flex justify-center mb-10">
              <button
                onClick={handleSave}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Save size={20} />
                  Save Profile
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}