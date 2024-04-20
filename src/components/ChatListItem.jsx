import React from 'react'

function ChatListItem({ id, image, chatTitle, chatTitleStatus, description, lastMessage, time, messageCount, waitTime, onlineStatus }) {
  return (
    <div>
        <div className="flex gap-x-2	border-[#DFE2E8] border-b p-4 w-[360px]">
            <div className='relative'>
              <img src={image} alt="" className='w-10 h-10' />
              <div className='w-3	h-3 border-2 border-white rounded-full bg-[#58B859] absolute top-0 right-0'></div>
            </div>
            <div className="">
                <p className='text-base font-bold'>
                  {chatTitle} 
                  {chatTitleStatus &&
                  <span className='bg-[#0061F9] text-white text-c10 leading-4 px-1.5 rounded-lg ml-4'>
                  {chatTitleStatus}
                </span>
                  }
                  
                </p>
                <p className='text-sm font-medium'>{description}</p>
                <p className='text-xs font-normal'>{lastMessage}</p>
            </div>
            <div className='flex flex-col	justify-between	items-end	'>
            {waitTime === "" && <p className='text-xs	font-normal	'>{time}</p>}
            {messageCount && <p className='text-c10 font-bold w-4 h-4 bg-[#5F6269] rounded-full text-white text-center leading-4	'>{messageCount}</p> }
            </div>
            {waitTime !== "" && 
            <div className='flex flex-col	justify-center items-end'>
              <p className='text-xs	font-normal text-center leading-4	'>{waitTime}</p>
              <p className='text-sm font-extrabold rounded-full text-center leading-6'>{time}</p>
            </div>
            }
            
        </div>
    </div>
  )
}

export default ChatListItem