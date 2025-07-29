import React from 'react'

function Skills() {
  return (
    <div className='h-auto w-full p-6 py-10'>
        <h1 className='text-center font-extrabold text-2xl underline underline-offset-6 decoration-black font'>_-Skills-_</h1>
        <div className='flex flex-col md:flex md:mt-10 mt-5 md:flex-row items-center md:justify-around h-9/12'>
            <div className='h-[120px] w-30 border border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:shadow-black transition-shadow duration-300 hover:translate-y-0.5'>
                <i className='fa-brands fa-html5 text-4xl text-orange-500'></i>
                <span>HTML5</span>
            </div>
            <div className='h-[120px] md:h-[140px] w-30 border border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-black hover:shadow-lg transition-shadow duration-300 hover:translate-y-0.5'>
                <i className='fa-brands fa-css3-alt text-4xl text-blue-500'></i>
                <span>CSS3</span>
            </div>
            <div className='h-[120px] md:h-[160px] w-30 border border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-black hover:shadow-lg transition-shadow duration-300 hover:translate-y-0.5'>
                <i className='fa-brands fa-js text-4xl text-yellow-400'></i>
                <span>JavaScript</span>
            </div>
            <div className='h-[120px] w-30 border md:h-[160px] border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-black hover:shadow-lg transition-shadow hover:translate-y-0.5 duration-300'>
                <i className='fa-brands fa-react text-4xl text-blue-400'></i>
                <span>React</span>
            </div>
            <div className='h-[120px] w-30 border md:h-[140px] border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-black hover:shadow-lg hover:translate-y-0.5 transition-shadow duration-300'>
                <i className='fa-brands fa-node text-4xl text-green-600'></i>
                <span>Node.js</span>
            </div>
            <div className='h-[120px] w-30 border border-black mt-6 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:shadow-black hover:transform hover:translate-y-0.5 transition-shadow duration-300'>
                <i className='fa-brands fa-git-alt text-4xl text-orange-600'></i>
                <span>Git</span>
            </div>
        </div>
    </div>
  )
}

export default Skills
