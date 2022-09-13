import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Block from '../components/Block'
import Code from '../components/Code'
import code from '../components/test'
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
    }, 5000)
    h()
    return () => clearInterval(id)
  }, [])
  return (
    <div className='h-screen'>
      <div className='min-h-screen'>
        <div className='flex items-center p-5 w-full space-x-5 max-w-xl mx-auto'>
          <div>Items Docs</div>
          <div>Itemsflower Docs</div>
        </div>
        <div className='flex items-center flex-col w-full px-5'>
          <div className='flex items-center flex-col max-w-xl w-full'>
            <Image src="/items.svg" alt="Items Logo" width={128} height={128} />
            <div className='mt-2 text-xl'>ITEMS</div>
            <div className='max-w-xl mb-2'>
              <span><span className='bg-emerald-500 text-white px-1 rounded mx-1 ml-5'>Items</span>is a project that render minecraft blocks and items to image </span>
              <span>through python and opengl without open the game.</span>
              <span><span className='bg-amber-500 text-white px-1 rounded mx-1'>Itemsflower</span>provided colors for template based blocks and items.</span>
            </div>
            <div className='w-full max-w-xl'>
              <div className='text-lg'>
                Itemsflower actions status
              </div>
              <div className='flex flex-col space-y-1 my-3 w-full'>
                {workflows.map((data, i) => <Workflow.status key={`flower-${i}`} status={data}></Workflow.status>)}
              </div>
            </div>
            <Block langs={[{
              'code': code,
              'language': 'Javascript'
            }]}></Block>
          </div>
        </div>
      </div>
      <div className='w-full sticky bottom-0 left-0'>
        <button className='bg-black text-white px-3 py-2 rounded-md hover:bg-black/90 transition-colors z-50 absolute right-3 bottom-3'>Login with Github</button>
      </div>
    </div>
  )
}

export default Home
