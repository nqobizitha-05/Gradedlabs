import { useState } from 'react'
import './App.css'
import './ProfileCard'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <div className='cards'>
      <ProfileCard 
      img="./member1.jpg" 
      name="Sam Jones" 
      job="Junior Software Developer" 
      bio="A passionate developer from UJ building the future of student innovation."
      />
      <ProfileCard 
      img="member2.jpg" 
      name="Scotts Smith" 
      job="Full Stack Developer" 
      bio="Passionate about building clean, user-friendly web apps."
      />
    </div>
  )
}

export default App
