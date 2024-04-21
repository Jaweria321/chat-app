import React from 'react'
import UserProfileCard from './UserProfileCard'
import UserProfileDetail from './UserProfileDetail'

function UserDetailComponent() {
  return (
    <div className='w-[360px] flex-none h-full overflow-y-scroll'>
        <UserProfileCard />
        <UserProfileDetail />
    </div>
  )
}

export default UserDetailComponent