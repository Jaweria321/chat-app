import React from 'react'
import ChatMessage from './ChatMessage'

function Chat() {
    const messages = [
        {
            id: 1,
            avatar:'', 
            contactTitle:'',
            message:'',
            imageMessage: '',
            isSender: false,
            emoji: '',
            time:'',

        }
    ]
  return (
    <div className=''>
        {
            messages.map(message => 
                <ChatMessage 
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