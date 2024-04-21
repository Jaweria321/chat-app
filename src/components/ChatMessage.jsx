import React from 'react'

function ChatMessage({avatar, contactTitle, message, imageMessage, isSender, emoji, time}) {
  return (
    <div className='flex gap-x-2 group mb-8' dir={isSender ? 'rtl' : 'ltr'}>
        
        <img src={avatar} alt="" className="rounded-full w-9 h-9" />
        
        <div>
          <p className='flex text-sm'>
              <span className='font-bold me-2 text-[#5F6269]'>{contactTitle}</span>
              <span className='font-normal' dir='ltr'>{time}</span>
          </p>
          <div className='flex items-center'>
            <div className='max-w-[456px] flex-none'>
              { imageMessage && <img src={imageMessage} alt="" className='mb-1' /> }
               <p  dir='ltr' className='max-w-[446px] bg-[#DFE2E8] py-1 px-3 rounded-lg rounded-ss-sm relative'>
                {message}
                <span className='absolute end-4 bottom-[-20px] p-1 rounded-full bg-white'>{emoji}</span>
              </p> 
            </div>
            <ul className='flex items-center gap-2 invisible	group-hover:visible	w-[99px] flex-none'>
              <li>
                <a href="#">
                  <img src="images/emoji.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/forward.png" alt="" />
                </a>
              </li>
              <li className='px-2'>
                <a href="#">
                  <img src="images/dots.png" alt="" />
                </a>
              </li>
            </ul> 
          </div>
        </div>

        
    </div>
  )
}

export default ChatMessage