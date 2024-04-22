import React from 'react'
import UserProfileCard from './UserProfileCard'
import UserProfileDetail from './UserProfileDetail'

function UserDetailComponent() {
  return (
    <div className='w-[360px] flex-none h-full overflow-y-scroll'>
        <UserProfileCard />
        <div>
          <a href="" className='inline-block w-2/4	text-center leading-10 text-[#F36531] border-b-2 border-[#F36531]'>Overview</a>
          <a href="" className='inline-block w-2/4	text-center leading-10 text-[#DFE2E8]'>Overview</a>
        </div>
        <div className='h-full overflow-y-scroll'>
          <UserProfileDetail />
        </div>
        <div className='bg-[#B5B8BE] p-4'>
          <form action="">
            <div className='bg-white w-full'>
              <label htmlFor="" className=''>Notes</label>
              <input type="text" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default UserDetailComponent