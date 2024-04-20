import React from 'react'

function SideBar() {
  return (
    <div className='w-[72px] h-screen border-e-2'>
        <div className='group hover:border-e-2 border-[#F36531] '>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="bg-[url('../public/images/message-circle.svg')] block w-6 h-6 group-hover:bg-[url('../public/images/message-circle-hover.svg')]" ></span>
                <span className="group-hover:text-[#F36531] leading-5	">Chats</span>
            </a>
        </div>
        <div className='group hover:border-e-2 border-[#F36531] '>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="bg-[url('../public/images/iconpeople.svg')] block w-6 h-6 group-hover:bg-[url('../public/images/iconpeople.svg')]" ></span>
                <span className="group-hover:text-[#F36531] leading-5	">People</span>
            </a>
        </div>
        <div className='group hover:border-e-2 border-[#F36531] '>
            <a href="" className='flex justify-center items-center flex-col gap-2'>
                <span className="bg-[url('../public/images/rooms.svg')] block w-6 h-6 group-hover:bg-[url('../public/images/rooms.svg')]" ></span>
                <span className="group-hover:text-[#F36531] leading-5	">Rooms</span>
            </a>
        </div>
    </div>
  )
}

export default SideBar
