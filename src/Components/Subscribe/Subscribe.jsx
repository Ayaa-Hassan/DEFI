import React from 'react'

export default function Subscribe() {
  return (
      <div>
          <div className=" max-w-[1240px] py-16 px-4 mx-auto bg-black/50 text-white text-center">
              <h1>Join Our DEFI Community</h1>
              <div className="py-4">
                  <input className='mr-4  rounded-3xl p-3 placeholder:text-[#6a00ffae] placeholder:font-semibold' type="email"  placeholder='Enter your email' />
                  <button className=' button'>Sign Up</button>
              </div>
              <div className=" flex justify-center items-center py-2  ">
                  <input type="checkbox"  className='mr-2  '/>
                  <p  >Yse, I agree to receive email communications from DEFI.</p>
              </div>
          </div>
    </div>
  )
}
