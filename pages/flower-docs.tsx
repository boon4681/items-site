import { NextPage } from "next"
import { useEffect, useState } from "react"
import Code from "../components/Code"
import Header from "../components/Header"

const FlowerDocs: NextPage = () => {
    const [all, setAll] = useState<any>({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/boon4681/itemsflower/1.19.2/all.json').then((res) => res.json()).then((data) => {setAll(data)})
    }, [])
    return <>
        <div className='min-h-screen'>
            <Header></Header>
            <div className='flex items-center flex-col w-full min-h-full'>
                <div className='flex items-center flex-col max-w-xl w-full'>
                    <div>
                        Itemsflower provided colors data for minecraft blocks, items, spawn_eggs, all formated in json.
                    </div>
                    <div className="mt-3">
                        <div>spawn_eggs.json</div>
                        <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-x-auto">
                            <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                                <div className="flex pr-4 items-center">
                                    {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/spawn_eggs.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a, i) => {
                                        if (/\{\w+\}/.test(a)) {
                                            return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                                        }
                                        return <div key={`l-${i}`}>{a}</div>
                                    })}
                                </div>
                            </div>
                            <div className='code bg-[#22272e] h-[250px] w-full overflow-y-scroll'>
                                <Code code={JSON.stringify(all.spawn_eggs, null, 2)} language={"json"}></Code>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div>all.json</div>
                        <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-x-auto">
                            <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                                <div className="flex pr-4 items-center">
                                    {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/all.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a, i) => {
                                        if (/\{\w+\}/.test(a)) {
                                            return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                                        }
                                        return <div key={`l-${i}`}>{a}</div>
                                    })}
                                </div>
                            </div>
                            <div className='code bg-[#22272e] h-[250px] w-full overflow-scroll'>
                                <Code code={JSON.stringify(all, null, 2)} language={"json"}></Code>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div>blocks.json</div>
                        <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-x-auto">
                            <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                                <div className="flex pr-4 items-center">
                                    {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/blocks.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a, i) => {
                                        if (/\{\w+\}/.test(a)) {
                                            return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                                        }
                                        return <div key={`l-${i}`}>{a}</div>
                                    })}
                                </div>
                            </div>
                            <div className='code bg-[#22272e] h-[250px] w-full overflow-y-scroll'>
                                <Code code={JSON.stringify(all.blocks, null, 2)} language={"json"}></Code>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div>items.json</div>
                        <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-x-auto">
                            <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                                <div className="flex pr-4 items-center">
                                    {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/items.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a, i) => {
                                        if (/\{\w+\}/.test(a)) {
                                            return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                                        }
                                        return <div key={`l-${i}`}>{a}</div>
                                    })}
                                </div>
                            </div>
                            <div className='code bg-[#22272e] h-[250px] w-full overflow-y-scroll'>
                                <Code code={JSON.stringify(all.items, null, 2)} language={"json"}></Code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FlowerDocs