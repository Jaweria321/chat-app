import React from 'react'
import ChatMessage from './ChatMessage'

function Chat() {
    const messages = [
        {
            id: 1,
            avatar:'images/avatar-2.png', 
            contactTitle:'Sophie Okonedo',
            message:'John contacted you with Sophie Okenodo',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 2,
            avatar:'images/profile-2.png', 
            contactTitle:'Sophie Okonedo',
            message:'Hi Alex! Have you heard about the upcoming virtual UX design event next month?',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 3,
            avatar:'images/profile-2.png', 
            contactTitle:'You',
            message:'Hey Ali! Yes, I got tickets. Super excited! 🎶',
            imageMessage: '',
            isSender: true,
            emoji: '',
            time:'9:30 AM',

        },
        {
            id: 4,
            avatar:'images/profile-2.png', 
            contactTitle:'Sophie Okonedo',
            message:'Hey Samir! Are you going to the concert tomorrow night?',
            imageMessage: '',
            isSender: false,
            emoji: '&#129395;',
            time:'9:30 AM',

        },
        {
            id: 5,
            avatar:'images/profile-2.png', 
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
    <div className=''>
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
  )
}

export default Chat