import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center py-2 px-8'>
        <img src="images/vfairs-logo.png" alt="" />
        <ul className='flex justify-center gap-2'>
            <li className=' w-10 h-10 bg-[#F0F2F6] rounded-full'>
                <a href='#' className='flex justify-center items-center w-full h-full '>
                    <img src="images/broadcast.png" alt="" />
                </a>
            </li>
            <li className=' w-10 h-10 bg-[#F0F2F6] rounded-full'>
                <a href='#' className='flex justify-center items-center w-full h-full '>
                    <img src="images/profile-card.png" alt="" />
                </a>
            </li>
            <li className=' w-10 h-10 bg-[#F0F2F6] rounded-full'>
                <a href='#' className='flex justify-center items-center w-full h-full '>
                    <img src="images/bell.png" alt="" />
                </a>
            </li>
            <li className=' w-6 h-6 bg-[#F36531] rounded-full'>
                <a href='#' className='flex justify-center items-center w-full h-full text-xs font-medium text-white'>
                    OR
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Header