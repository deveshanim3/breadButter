import React, { useState } from 'react'
import InputForm from './components/InputForm'
import ProfileView from './components/ProfileView'
import './App.css'
const App = () => {
  const [profile,setProfile]=useState(null)
  return (
    <div className="app-container">
      <h1 className="title">Talent Summariser</h1>
      <div className="form-container">
        <InputForm setProfile={setProfile} />
      </div>
      {
        profile && <div className="profile-container">
          <ProfileView profile={profile} />
        </div>
      }
    </div>
  )
}

export default App