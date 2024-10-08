import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import { SiFsecure, SiHiveBlockchain, SiStrapi } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'

export default function About() {
    return (<div className="  text-white text-center bg-black/60">
      <div className=' max-w-[1240px] mx-auto px-4 py-16 ' >
          <div className="">
              <h1 className=' py-4'>A Growing Protocol Ecosystem</h1>
              <p className='py-4 text-xl'>
                  The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all
              </p>
              {/*  card container */}
              <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proof to connect highly accurate and available data/APIs to any smart contract.' />
                    <AboutCard icon={<SiFsecure size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing system, and integrate with any current or future blockchain. ' />
                    <AboutCard icon={<SiStrapi size = { 40 } />} heading='Proven, ready-mode solutions' text='Use decentralization, trusted nodes, premium data, and cryptographic proof to connect highly accurate and available data/APIs to any smart contract.'/>
                    <AboutCard icon={<VscServerProcess  size={40} />} heading=' Secure off-chain computation' text=' Use decentralization, trusted nodes, premium data, and cryptographic proof to connect highly accurate and available data/APIs to any smart contract.' />
                 
                
              </div>
          </div>
           
      </div>
  </div>
  )
}