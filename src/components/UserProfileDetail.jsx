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
    <div className=''>
      <button className="flex" onClick={() => setIsActive(!isActive)}>
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