import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from "./data/hero.json"
const Home = () => {
  return (
    <>
         <div className="container home">
               <div className="left">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.</h1>
                <a href={pdf} download="Aniket.pdf" className="btn btn-outline-warning">Download Resume</a>
               </div>

               
               <div className="right">
                <div className="img">
                  <img src={`/assets/${hero.imgSrc}`} alt=''/>
                </div>
               </div>
         </div>


    </>
  )
}

export default Home
