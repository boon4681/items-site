import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Block from '../components/Block'
import Header from '../components/Header'
import { js, py } from '../components/preview'
import Workflow from '../components/Workflow'

const Home: NextPage = () => {
  const [workflows, setWorkflows] = useState<any[]>([])
  useEffect(() => {
    const h = () => fetch('/api/flower/workflow')
      .then((res) => res.json())
      .then((data) => {
        setWorkflows(data.data)
      })
    const id = setInterval(() => {
      h()
    }, 1000)
    h()
    return () => clearInterval(id)
  }, [])
  return (
    <>
      <div className='min-h-screen'>
        <Header></Header>
        <div className='flex items-center flex-col w-full'>
          <div className='flex items-center flex-col max-w-xl w-full'>
            <Image src="/items.svg" alt="Items Logo" width={128} height={128} />
            <div className='mt-2 text-xl'>ITEMS</div>
            <div className='max-w-xl mb-2'>
              <span><span className='bg-emerald-500 text-white px-1 rounded mx-1 ml-5'>Items</span>is a project that render minecraft blocks and items to image </span>
              <span>through python and opengl without open the game.</span>
              <span><span className='bg-amber-500 text-white px-1 rounded mx-1'>Itemsflower</span>provided colors for template based blocks and items.</span>
            </div>
            <Block langs={[
              {
                'code': js,
                'language': 'Javascript'
              },
              {
                'code': py,
                'language': 'Python'
              }
            ]}></Block>
            <div className='w-full max-w-xl mt-6'>
              <div className='text-lg'>
                Itemsflower actions status
              </div>
              <div className='flex flex-col space-y-1 my-3 w-full'>
                {workflows.map((data, i) => <Workflow.status key={`flower-${i}`} show={i == 0} status={data}></Workflow.status>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-full sticky bottom-20 left-0 mt-5 flex justify-end'>
        <div className='absolute -top-24 right-7 flex flex-col'>
          <div>FOR boon4681 ONLY</div>
          <div className='mx-auto'>
            <div>|</div>
            <div>|</div>
            <div>V</div>
          </div>
        </div>
        <button className='bg-black text-white px-3 py-2 rounded-md hover:bg-black/90 transition-colors z-50 m-3 absolute'>Login with Github</button>
      </div> */}
    </>
  )
}

export default Home
