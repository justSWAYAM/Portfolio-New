import React from 'react'

const Education = () => {
  return (
    <div className='education md: mx-12  shadow-gray-300 w-[9/12] my-12 font-custom md:ml-[100px]'>
        <h2 className='text-4xl mb-4 font-custom font-bold'>Education</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border  dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none dark:">2023-2027</time>
            <h3 className="text-lg font-semibold">Fr.Conceicao Rodrigues College Of Engineering</h3>
            <p className="mb-4 text-base font-normal ">
              Computer Engineering  ,  SGPA -8.36
            </p>
            
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border  dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none dark:">March 2021-2023</time>
            <h3 className="text-lg font-semibold ">Pace science junior college</h3>
            <p className="text-base font-normal ">
              12th , JEE ,MHT-CET
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border  dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none dark:">April 2021</time>
            <h3 className="text-lg font-semibold ">Rosary High School</h3>
            <p className="text-base font-normal ">
              SSC -89.4%
            </p>
          </li>
        </ol>
      </div>
  )
}

export default Education