import Link from 'next/link'
import React from 'react'

const header = ({font}:{font?:string}) => {
  return (
    <div className='py-2 bg-gray-952'>
       <div className='max-w-[100rem] px-12 mx-auto flex justify-between'>
       <Link href="/">
      <h1 className={`uppercase text-yellow-500 text-center py-2 ${font}`}>
      Easy Sell
      </h1>
       </Link>
       <Link href="/prodcuts/upload">
       <h1 className='uppercase text-green-951 text-xl py-2 hover:text-yellow-700'> Upload {">"}</h1>
       </Link>

       </div>
    

        
    </div>
  )
}

export default header