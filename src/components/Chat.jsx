import React from 'react'
import ChatMessage from './ChatMessage'

function Chat() {
    const messages = [
        {
            id: 1,
            avatar:'images/profile-2.png', 
            contactTitle:'Sophie Okonedo',
            message:'John contacted you with Sophie Okenodo',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 2,
            avatar:'images/profile-1.png', 
            contactTitle:'Sophie Okonedo',
            message:'Hi Alex! Have you heard about the upcoming virtual UX design event next month?',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 3,
            avatar:'images/profile-3.png', 
            contactTitle:'You',
            message:'Hey Ali! Yes, I got tickets. Super excited! 🎶',
            imageMessage: '',
            isSender: true,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 4,
            avatar:'images/profile-1.png', 
            contactTitle:'Sophie Okonedo',
            message:'Hey Samir! Are you going to the concert tomorrow night?',
            imageMessage: '',
            isSender: false,
            emoji: '&#129395;',
            time:'9:30 AM',

        },
        {
            id: 5,
            avatar:'images/profile-3.png', 
            contactTitle:'You',
            message:'Hey Sophie! Yes, I got tickets. Super excited! 🎶',
            imageMessage: 'images/chat-img.png',
            isSender: true,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 6,
            avatar:'images/profile-1.png', 
            contactTitle:'',
            message:'That nice Samir see you there',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'7 min ago',
        }
    ]
  return (
    <div className='flex flex-col border border-[#DFE2E8]'>
        <div className='flex justify-between p-4 border-b border-[#DFE2E8]'>
            <div className='flex gap-3 justify-center items-center'>
                <img src="images/chat-avatar.png" alt="" />
                <p className='text-sm font-extrabold me-2 text-[#344054]'>Sophie Okonedo</p>
                <a href="" class="rounded-full bg-[#F0F2F6] w-6 h-6 flex justify-center items-center">
                    <img src="images/heart.png" alt="" class="w-auto" />
                </a>
            </div>
            <ul className='flex gap-4 justify-between items-center'>
                <li><img src="images/phone-call.png" alt="" /></li>
                <li><img src="images/video.png" alt="" /></li>
                <li><img src="images/more-vertical-orange.png" alt="" /></li>
                <li><img src="images/info.png" alt="" /></li>
            </ul>
        </div>
        <div className='flex-auto h-full overflow-y-scroll p-4'>
        {
            messages.map(message => 
                <ChatMessage 
                key={message.id}
                avatar={message.avatar}  
                contactTitle={message.contactTitle}  
                message={message.message} 
                imageMessage={message.imageMessage} 
                isSender={message.isSender} 
                emoji={message.emoji} 
                time={message.time} />)
        }

        </div>
    </div>

  )
}

export default Chat