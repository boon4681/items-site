import { NextPage } from "next"
import Header from "../components/Header"

const ItemsDocs: NextPage = () => {
    return <>
        <div className='min-h-screen'>
            <Header></Header>
            <div className='flex items-center flex-col w-full min-h-full'>
                <div className='flex items-center flex-col max-w-xl w-full'>
                    <div className="text-3xl mt-40">
                        Available soon...
                    </div>
                    <div>
                        Items is currently in the experiment state there are many bugs need to be fixed before providing the api.
                        but you can download the project and try it by your-self using this <a className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer" href="https://github.com/boon4681/items">link</a>.
                    </div>
                    {/* Items come with pre-generated images in 4 sizes: x32, x64, x128, and x256.
                    <div className="block rounded-lg border bg-[#202020] text-white/90 max-w-xl w-full overflow-x-auto">
                        <div className="flex px-5 py-3 border-b border-b-slate-100/10 text-xs items-center space-x-4">
                            <div className="bg-blue-600 rounded-[20px] px-3 py-1 text-xs">GET</div>
                            <div className="flex pr-4 items-center">
                                {'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/all.json'.match(/(\{\w+\})|[^{}]+/g)?.map((a, i) => {
                                    if (/\{\w+\}/.test(a)) {
                                        return <input key={`l-${i}`} type="text" disabled placeholder={a} className='text-black w-[66px] text-center bg-slate-200 rounded py-0.5 mx-1 placeholder:text-black' />
                                    }
                                    return <div key={`l-${i}`}>{a}</div>
                                })}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
}

export default ItemsDocs