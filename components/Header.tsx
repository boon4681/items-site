
export default () => {
    return (
        <div className='flex items-center w-full space-x-3 max-w-xl mx-auto py-5'>
            <a href={'/'} className='hover:text-black/50 transition-all hover:px-3'>Home</a>
            <div>|</div>
            <a href={'/items-docs'} className='hover:text-black/50 transition-all hover:px-3'>Items Docs</a>
            <div>|</div>
            <a href={'/flower-docs'} className='hover:text-black/50 transition-all hover:px-3'>Itemsflower Docs</a>
            <div>|</div>
            <a href={'/browse'} className='hover:text-black/50 transition-all hover:px-3'>Browse</a>
            <div>|</div>
            <a href={'/status'} className='hover:text-black/50 transition-all hover:px-3'>Status</a>
        </div>
    )
}