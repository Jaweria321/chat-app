import React from 'react'
import UserProfileCard from './UserProfileCard'
import UserProfileDetail from './UserProfileDetail'

function UserDetailComponent() {
  return (
    <div className='flex-[360px_1_0%]'>
        <UserProfileCard />
        <UserProfileDetail />
    </div>
  )
}

export default UserDetailComponent