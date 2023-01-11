import { VscError } from 'react-icons/vsc'
import { RiErrorWarningLine } from 'react-icons/ri'
import { BsCheckCircle } from 'react-icons/bs'
import Code from './Code'
import { useState } from 'react'
const status = (props: { status: any,show?:boolean }) => {
    const status = props.status
    const icon_size = 'w-6 h-6'
    const [show, setShow] = useState(false||!!props.show)
    return (
        <div className='flex flex-col bg-[#202020] text-white/80 rounded-md relative shadow-xl'>
            <div className='flex px-4 py-3 mr-4 cursor-pointer select-none whitespace-nowrap overflow-hidden max-w-full' onClick={() => setShow(!show)}>
                <div className='mr-3'>
                    {(() => {
                        if (status.status != "completed") {
                            return <RiErrorWarningLine className={`text-yellow-500 ${icon_size}`}></RiErrorWarningLine>
                        }
                        switch (status.conclusion) {
                            case "success":
                                return <BsCheckCircle className={`text-emerald-500 ${icon_size}`}></BsCheckCircle>
                            case "failure":
                                return <VscError className={`text-rose-500 ${icon_size}`}></VscError>
                            default:
                                return <div></div>
                        }
                    })()}
                </div>
                <div className='mr-2 text-xs'>name</div>
                {status.name.slice(0, 6)}
                <div className='ml-5 mr-2 text-xs'>conclusion</div>
                {status.conclusion}
                <div className='ml-5 mr-2 text-xs'>launched</div>
                {status.launched}
            </div>
            <div style={{ height: show ? 235 : 0}} className={`overflow-hidden transition-all px-4`}>
                <div className='shadow border-2 border-black rounded-md overflow-hidden'>
                    <Code code={JSON.stringify(status, null, 2)} language="json"></Code>
                </div>
            </div>
        </div>
    )
}

export default { status }