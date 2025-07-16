import React from 'react'
import './ProfileView.css'
const ProfileView = ({profile}) => {
    return (
        <div className="profile-card">
          <h2 className="profile-heading">Profile Preview:</h2>
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Bio:</b> {profile.bio}</p>
          <img src={profile.profile_pic} alt="Profile Pic" width="100" /><br />
          <p><b>Portfolio:</b> {profile.portfolio?.map((p, i) => (
            <a key={i} href={p} target="_blank" rel="noreferrer">Link {i+1}</a>
          ))}</p>
          <div>
            <h4>Work Samples:</h4>
            {profile.work_samples?.map((img, idx) => (
              <img key={idx} src={img} alt={`Sample ${idx+1}`} width="150" />
            ))}
          </div>
        </div>
      );
}

export default ProfileView