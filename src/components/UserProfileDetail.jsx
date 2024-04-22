import React, { useState } from 'react'
function UserProfileDetail() {
 
  const [isActive, setIsActive] = useState(true);
  const userDetailContent = 
  [{
    title: "Email Address: ",
    description: "sophie.okonedo@company.com"
  },
  {
    title: "Alternative Email: ",
    description: "sophie887@gmail.com"
  },
  {
    title: "Date of Birth: ",
    description: "29 Jul, 1990"
  },
  {
    title: "Country:",
    description: "Canada"
  },
  {
    title: "State:",
    description: "Alberta"
  },
  {
    title: "City:",
    description: "Edmonton"
  },
  {
    title: "Postal Code:",
    description: "987909"
  }
]

  return (
    <>
      <div className=' px-5 border-y border-[#DFE2E8]'>
        <button className="flex  py-4" onClick={() => setIsActive(!isActive)}>
          <div className= {isActive ? "text-[#F36531]" : "text-[#202223]"}>
            <p className='text-base font-medium'>User Detail</p>
          </div>
          <div>
            <img src={isActive ? "images/arrow-up.png" : "images/arrow-down.png"} alt="" />
          </div>
        </button>
        <div>
          {isActive && userDetailContent.map((detail) => <UserDetailContent title={detail.title} description={detail.description}  />)}
        </div>
      </div>
      <Tags />
      </>
  );
}

function Tags() {
  const [isTagActive, setIsTagActive] = useState(false);

  return (
    <>
      <div className='w-full  border-y border-[#DFE2E8]'>
        <button className="flex px-5  py-4 w-full" onClick={() => setIsTagActive(!isTagActive)}>
          <div className= {isTagActive ? "text-[#F36531]" : "text-[#202223]"}>
            <p className='text-base font-medium'>Tags (5)</p>
          </div>
          <div>
            <img src={isTagActive ? "images/arrow-up.png" : "images/arrow-down.png"} alt="" />
          </div>
        </button>
        <div className='px-5'>
        {isTagActive && <div>Tags here</div> }
        </div>
      </div>
    </>
  );
}

function UserDetailContent({title, description}) {
 

  return (
    <div className='mb-4'>
      <div className='text-sm font-medium'>
        <p className='text-[#5F6269]'>{title}</p>
        <p className='text-[#1B1F29]'>{description}</p>
      </div>
    </div>
  );
}
export default UserProfileDetail