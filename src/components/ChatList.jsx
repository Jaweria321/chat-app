import React from 'react'
import ChatListItem from './ChatListItem'

function ChatList() {

    const chatListItemsQueued = [
        {
            id: 1,
            image: 'images/avatar-1.png',
            chatTitle: 'Emily Johnson',
            chatTitleStatus: '',
            description: '',
            lastMessage: 'You: Hello Emily How are you',
            time: '8m: 20s',
            messageCount: '2',
            waitTime: '',
            onlineStatus: 'true'
        },
        {
            id: 2,
            image: 'images/avatar-2.png',
            chatTitle: 'Sophie Okonedo',
            chatTitleStatus: '',
            description: 'UX Designer | GreenScape Solut...',
            lastMessage: '',
            time: '',
            messageCount: '',
            waitTime: '10m : 25s',
            onlineStatus: 'true'
        }
    ]
    const chatListItems = [
        {
            id: 3,
            image: 'images/avatar-3.png',
            chatTitle: 'Quantum Pioneers',
            chatTitleStatus: '',
            description: '',
            lastMessage: 'You: Hello all session is started join...',
            time: '1h',
            messageCount: '2',
            waitTime: '',
            onlineStatus: ''
        },
        {
            id: 4,
            image: 'images/avatar-4.png',
            chatTitle: 'Martin Randolph',
            chatTitleStatus: '',
            description: 'UX Designer | GreenScape Solutions',
            lastMessage: 'Draft: Hello Martin how are you...',
            time: '1h',
            messageCount: '5',
            waitTime: '',
            onlineStatus: ''
        },
        {
            id: 5,
            image: 'images/avatar-5.png',
            chatTitle: 'Sophie Okonedo',
            chatTitleStatus: 'Exhibitor',
            description: 'Product Manager  | Microsoft',
            lastMessage: 'Sophie i ma sending you soon',
            time: '1h',
            messageCount: '',
            waitTime: '',
            onlineStatus: 'true'
        },
        {
            id: 6,
            image: 'images/avatar-6.png',
            chatTitle: 'Microsoft',
            chatTitleStatus: '',
            description: '',
            lastMessage: 'Clark: Hello Martin how are you...',
            time: '1h',
            messageCount: '',
            waitTime: '',
            onlineStatus: ''
        },
        {
            id: 7,
            image: 'images/avatar-7.png',
            chatTitle: 'Public Chatroom',
            chatTitleStatus: '',
            description: '',
            lastMessage: 'Clark: Hello Martin how are you...',
            time: '1h',
            messageCount: '',
            waitTime: '',
            onlineStatus: ''
        },
        {
            id: 8,
            image: 'images/avatar-8.png',
            chatTitle: 'Robert Anderson',
            chatTitleStatus: 'Speaker',
            description: 'Accounts Manager | Elite Financial Advisors',
            lastMessage: 'You: Hello Robert send me your resume',
            time: '1h',
            messageCount: '',
            waitTime: '',
            onlineStatus: 'true'
        }
    ]

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h3>Chat</h3>
            <img src="images/dots.png" alt="" />
        </div>
        <div>
            <h3 className='text-lg font-extrabold text-black'>Queued</h3>
            { 
                chatListItemsQueued.map( (chatListItem) => 
                    < ChatListItem 
                    key = {chatListItem.id} 
                    image = {chatListItem.image }
                    chatTitle = {chatListItem.chatTitle}
                    chatTitleStatus = {chatListItem.chatTitleStatus}
                    description = {chatListItem.description}
                    lastMessage = {chatListItem.lastMessage}
                    time = {chatListItem.time}
                    messageCount = {chatListItem.messageCount}
                    waitTime = {chatListItem.waitTime}
                    onlineStatus = {chatListItem.onlineStatus}
                    />
                )
            }
            
            <h3 className='text-lg font-extrabold text-black'>Chats</h3>
            { 
                chatListItems.map( (chatListItem) => 
                    < ChatListItem 
                    key = {chatListItem.id} 
                    image = {chatListItem.image }
                    chatTitle = {chatListItem.chatTitle}
                    chatTitleStatus = {chatListItem.chatTitleStatus}
                    description = {chatListItem.description}
                    lastMessage = {chatListItem.lastMessage}
                    time = {chatListItem.time}
                    messageCount = {chatListItem.messageCount}
                    waitTime = {chatListItem.waitTime}
                    onlineStatus = {chatListItem.onlineStatus}
                    />
                )
            }
        </div>
    </div>
  )
}

export default ChatList