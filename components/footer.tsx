import React from 'react'

const footer = ({font}:{font?:string}) => {
  return (
    <div className='py-12 bg-gray-952 text-gray-953'>
        <div className={`max-w-[100rem] px-12 mx-auto flex justify-between ${font}`}>
            <p className='text-xl'> @ abhishek kumar singh Inc.</p>

        </div>

    </div>
  )
}

export default footer