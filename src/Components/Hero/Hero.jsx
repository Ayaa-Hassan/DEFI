import React from 'react'



export default function Hero() {
    return <>
        <div className=" w-full h-[100vh] top-[90px]">
       
            <div className=" w-full    h-[90%]  pt-16 flex flex-col px-4 justify-center items-center text-white">
                <h1 className=''> Decentralized</h1>
                <h2 className='text-3xl font-bold py-2'> <span className='text-[#00d8ff]'>Trading</span> Protocol </h2>
                <p className=' py-4 text-xl'> Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
                <div className="">
                    <button className='button m-2 '> Use Defi</button>
                    <button className=' m-2 py-3 px-7 rounded-3xl bg-transparent border text-[#00d8ff] border-[#00d8ff] '>FAQ</button>
                </div>
            </div>
            <div className="">
                <p className=' text-center text-white text-2xl font-bold'>Total Volume Secured: $24,104,783,662.47</p>
            </div>
            </div>
       
    </>
}
