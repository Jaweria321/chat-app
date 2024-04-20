import React from 'react'

function ChatMessage({avatar, contactTitle, message, imageMessage, isSender, emoji, time}) {
  return (
    <div className='flex gap-x-2' dir={isSender ? 'rtl' : 'ltr'}>
        <div>
          <img src={Image} alt="" className="rounded-full w-9 h-9" />
        </div>
        <div>
          <p className='flex text-sm'>
              <span className='font-extrabold me-2'>{contactTitle}</span>
              <span className='font-normal' dir='ltr'>{time}</span>
          </p>
          <div className='flex items-center'>
            <div>
              { imageMessage ? <img src="images/chat-img.png" alt="" className='mb-1' /> :
               <p className='max-w-[456px] bg-[#DFE2E8] py-1 px-3 rounded-lg rounded-ss-sm relative'>
                {message}
                <span className='absolute end-4 bottom-[-20px] p-1 rounded-full bg-white'>{emoji}</span>
              </p> }
            </div>
            <ul className='flex items-center gap-2'>
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