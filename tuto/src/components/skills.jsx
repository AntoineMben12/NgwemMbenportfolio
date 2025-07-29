import './skills.css';
import React from 'react'

function Skills() {
  return (
    <div className='skills-container'>
        <h1 className='skills-title'>_-Skills-_</h1>
        <div className='skills-list'>
            <div className='skills-item skills-html'>
                <i className='fa-brands fa-html5 text-4xl text-orange-500'></i>
                <span>HTML5</span>
            </div>
            <div className='skills-item skills-css'>
                <i className='fa-brands fa-css3-alt text-4xl text-blue-500'></i>
                <span>CSS3</span>
            </div>
            <div className='skills-item skills-js'>
                <i className='fa-brands fa-js text-4xl text-yellow-400'></i>
                <span>JavaScript</span>
            </div>
            <div className='skills-item skills-react'>
                <i className='fa-brands fa-react text-4xl text-blue-400'></i>
                <span>React</span>
            </div>
            <div className='skills-item skills-node'>
                <i className='fa-brands fa-node text-4xl text-green-600'></i>
                <span>Node.js</span>
            </div>
            <div className='skills-item skills-git'>
                <i className='fa-brands fa-git-alt text-4xl text-orange-600'></i>
                <span>Git</span>
            </div>
        </div>
    </div>
  )
}

export default Skills
