import React from 'react'
import terminal from '../../assets/terminal.png'

export default function Developers() {
  return (
      <div className=' w-full text-white bg-black/50 '>
          <div className=" max-w-[1240px] mx-auto px-4 py-16 md:flex ">
              <div className="">
                  <h1>Superpowers for DEFI developers.</h1>
                  <p className='p-2'>Checkout the <span className='text-[#00d8ff]'> documentation</span>,the <span className='text-[#00d8ff]'> quick start</span>
                      integrate your project with thousands of tokens and billions of liquidity.
                  </p>
              </div>
              <div className=" flex justify-center w-full py-16 ">
                  <img src={terminal} className=' max-w-[300px] shadow-lg shadow-cyan-500/50  text-center' alt="/" />
              </div>
          </div>
    </div>
  )
}
