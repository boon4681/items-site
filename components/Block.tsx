import { useState } from "react"
import Code from "./Code"


export default function Block(props: { langs: { language: string, code: string }[] }) {
    const [selected, select] = useState<number>(0)
    return (
        <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-hidden">
            <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                <div className="flex items-center">
                    {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/all.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a,i)=>{
                        if(/\{\w+\}/.test(a)){
                            return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                        }
                        return <div key={`l-${i}`}>{a}</div>
                    })}
                </div>
            </div>
            <div className="text-xs flex select-none">
                {props.langs.map((a, i) =>
                    <div key={`code-block-${i}`} className={`px-5 py-3 flex flex-col relative cursor-pointer`} onClick={() => select(i)}>
                        {a.language}
                        <div className={`${i == selected ? 'bg-orange-400' : 'bg-gray-100/40'} transition-all w-full h-0.5 absolute bottom-0 left-0 rounded-t-md`}></div>
                    </div>
                )}
            </div>
            <div className='code bg-[#22272e] h-[250px] w-full overflow-scroll'>
                <Code code={props.langs[selected].code} language={props.langs[selected].language.toLowerCase()}></Code>
            </div>
        </div>
    )
}