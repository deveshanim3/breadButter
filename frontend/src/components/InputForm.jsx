import React, { useState } from 'react'
import axios from 'axios'
import './InputForm.css';
const InputForm = ({setProfile}) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      let response

      if(file){
        const formData=new FormData();
        formData.append('resume',file);
        response=await axios.post('http://localhost:5000/api/profile/upload-resume',formData);
      }
      else if(link){
        response = await axios.post('http://localhost:5000/api/profile/fetch-profile',{link});
      }
      else{
        alert('Provied atleast Social media link or Resume')
        return;
      }
      const profileData={...response.data,name}
      setProfile(profileData)
    } catch (error) {
      alert('Error fetching profile!');
      console.log(error)
    }
  }
  return (
    <div className="input-form-container">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
        <input type="url" placeholder="Instagram or LinkedIn Link" value={link} onChange={(e)=>setLink(e.target.value)}/> <br/>
        <input type="file" accept="application/pdf" onChange={(e)=>setFile(e.target.files[0])}/> <br/>
        <button type="submit">Submit</button>
        </form>       
    </div>
  )
}

export default InputForm