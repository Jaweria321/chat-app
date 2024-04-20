import React from 'react'

function UserProfileCard() {
  return (
    <div className="flex gap-x-2">
        <div className='relative'>
          <img src="images/avatar.png" alt="" className='w-10 h-10' />
        </div>
        <div>
            <p className='text-base font-bold'>
              Emily Johnson 
            </p>
            <p className='text-sm font-medium'>UX Designer | GreenScape Solutions</p>
            <div className='flex'>
                <ul className='flex gap-1'>
                    <li><img src="images/star-yellow.png" alt="" /></li>
                    <li><img src="images/star-yellow.png" alt="" /></li>
                    <li><img src="images/star-yellow.png" alt="" /></li>
                    <li><img src="images/star-grey.png" alt="" /></li>
                    <li><img src="images/star-grey.png" alt="" /></li>

                </ul>
                <p className='ml-2 text-xs font-bold'>3.0</p>
            </div>
        </div>
        <div className='flex gap-2 justify-center'>
            <a href="" className='rounded-full bg-[#F0F2F6] w-6 h-6 flex justify-center items-center'>
                <img src="images/heart.png" alt="" className='w-auto' />
            </a>
            <a href="" className='rounded-full bg-[#F0F2F6] w-6 h-6 flex justify-center items-center'>
                <img src="images/more-vertical.png" alt="" className='w-auto' />
            </a>
        </div>
    </div>
  )
}

export default UserProfileCard