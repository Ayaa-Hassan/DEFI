import React from 'react'


export default function AboutCard( props) {
   
  return (
      <div>
          {/* card */}
          <div className=" flex flex-col border text-left rounded-2xl py-12 px-8 ">
              {/* icon */}
              <div className=" bg-[#00d8ff] text-black w-[60px] h-[60px] flex items-center  justify-center rounded-full p-2  ">
                  {props.icon}
              </div>
              {/* title */}
              <h3 className=' text-xl py-4 font-bold'> {props.heading}</h3>
              {/* description */}
              <p>{props.text} </p>
          </div>
      </div>
  )
}
