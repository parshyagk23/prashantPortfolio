import React from 'react'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import HomePage from "./Pages/HomePage/HomePage"
import Navbar from './Components/Navbar/Navbar'
function App() {


  return (
    <>
      <Navbar />
      
        <HomePage />
      
      <div id='projects' >
        <ProjectPage />
      </div>
    </>
  )
}

export default App
