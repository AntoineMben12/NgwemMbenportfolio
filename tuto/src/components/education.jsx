import React from 'react'

function Education() {
  return (
    <div className='h-[60vh] w-full p-5'>
        <h1 className='text-center underline underline-offset-6 decoration-black font-extrabold text-2xl'>_-Education-_</h1>
        <div className='lg:flex-row flex-col pl-6 flex md:justify-center gap-10 mt-3.5 items-center '>
            <div className="hidden lg:flex h-70 w-70 border border-black mb-10 lg:mb-0 bg-[url('https://cdn-icons-png.flaticon.com/512/3135/3135755.png')] bg-cover bg-center"></div>
            <div className='w-6/12'>
                <p>Primary studies was completed at LaFierte School.</p>
                <p>Secondary studies were undertaken at LaFieter and All natoins School.</p>
                <p>Tertiary education was pursued at DEF University.</p>
                <p>Graduated with a degree in Computer Science.</p>
                <p>Continuous learning through online courses and certifications.</p>
            </div>
        </div>
    </div>
  )
}


export default Education