import React from 'react'

function SideBar() {
  return (
    <div className='w-[72px] h-screen border-e-2 flex-none'>
        <div className='border-e-2 border-[#F36531] bg-[#FEF0EA] p-2'>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="block w-6 h-6 bg-[url('../public/images/message-circle-hover.svg')]" ></span>
                <span className="text-[#F36531] leading-5	">Chats</span>
            </a>
        </div>
        <div className='p-2'>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="bg-[url('../public/images/iconpeople.svg')] block w-6 h-6" ></span>
                <span className="leading-5">People</span>
            </a>
        </div>
        <div className='p-2'>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="bg-[url('../public/images/rooms.svg')] block w-6 h-6" ></span>
                <span className="leading-5">Rooms</span>
            </a>
        </div>
    </div>
  )
}

export default SideBar
