import React from 'react'

function ChatListItem({ id, image, chatTitle, chatTitleStatus, description, lastMessage, time, messageCount, waitTime, onlineStatus }) {
  return (
      <div className="flex justify-between	border-[#DFE2E8] border-b p-4 w-[360px] relative hover:bg-[#FEF0EA] group">
          <div className='flex gap-x-2'>
            <div className='relative w-[40px] flex-none'>
              <img src={image} alt="" className='w-10 h-10' />
              <div className='w-3	h-3 border-2 border-white rounded-full bg-[#58B859] absolute top-0 right-0'></div>
            </div>
            <div className="w-[220px] flex-none">
                <p className='text-base font-bold'>
                  {chatTitle} 
                  {chatTitleStatus &&
                  <span className='bg-[#0061F9] text-white text-c10 leading-4 px-1.5 rounded-lg ml-4'>
                  {chatTitleStatus}
                </span>
                  }
                  
                </p>
                <p className='text-sm font-medium line-clamp-1'>{description}</p>
                <p className='text-xs font-normal line-clamp-1'>{lastMessage}</p>
            </div>
          </div>
          <div className='w-[55px] flex-none'>
            {waitTime === "" && 
              <div className='flex flex-col	justify-between	items-end	h-full'>
              {waitTime === "" && <p className='text-xs	font-normal	'>{time}</p>}
              {messageCount && <p className='text-c10 font-bold w-4 h-4 bg-[#5F6269] rounded-full text-white text-center leading-4	'>{messageCount}</p> }
              </div>
            }
            {waitTime !== "" && 
            <div className='flex flex-col	justify-center items-end'>
              <p className='text-xs	font-normal text-center leading-4	'>Wait Time</p>
              <p className='text-[11px] font-bold rounded-full text-center leading-6'>{waitTime}</p>
            </div>
            }
          </div>
          <div className="hidden absolute h-8 w-8 bg-white group-hover:flex justify-center items-center rounded-lg top-2/4 right-3 translate-y-[-50%]	">
            <img src="images/dots.png" alt="" className=''/>
          </div>
      </div>
  )
}

export default ChatListItem