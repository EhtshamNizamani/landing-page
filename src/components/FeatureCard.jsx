import React from 'react'

function FeatureCard(props) {
  return (
<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
         <div className='hidden text-orange-600 md:block bg-neutral-900 rounded-full p-2 mr-2'>
                {props.icon}
            </div>
        <div className=' flex flex-col justify-left md:items-start items-center '>
           
            <div className='text-white text-1xl flex'>
            <div className='block text-orange-600 md:hidden flex-shrink-0 bg-neutral-900 rounded-full p-2 mr-2'>
                {props.icon}
            </div>
                <h1>
                    {props.text}
                </h1>
            </div>

        <div className='text-neutral-600 p-3 text-cen sm:text-left'>
        <p>
            {props.description}
        </p>
        </div>
        </div>

    </div>
  )
}

export default FeatureCard