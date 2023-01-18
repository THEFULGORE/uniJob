import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' bg-gray-300 flex justify-between items-center -mx-64 py-4 px-12 sticky top-0 bg-opacity-70'>
      <Link href="/"><div className=' text-3xl font-semibold'>UniJob</div></Link>
      
      <Link href='/login' className='font-semibold text-xl'>Войти</Link>
    </div>
  )
}

export default Header