import { useState } from "react"
import Code from "./Code"


export default function Block(props: { langs: { language: string, code: string }[] }) {
    const [selected, select] = useState<number>(0)
    return (
        <div className="rounded-lg border overflow-hidden">
            <div>
                {props.langs.map((a,i)=><div>{a.language}</div>)}
            </div>
            <div className='bg-[#f6f8fa]'>
                <Code code={props.langs[selected].code} language={props.langs[selected].language.toLowerCase()} theme="light"></Code>
            </div>
        </div>
    )
}