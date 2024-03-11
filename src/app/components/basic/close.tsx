export default function Close({ onClick }: any) {
    return (
        <a className='text-xl text-[#898989] h-full flex justify-center items-center' onClick={onClick}>
            <div className='flex relative w-10 h-10 justify-center items-center ml-4'>
                <div className='absolute left-0 w-1/2 h-1 bg-slate-400 transform rotate-45 rounded-xl'></div>
                <div className='absolute left-0 w-1/2 h-1 bg-slate-400 transform -rotate-45 rounded-xl'></div>
            </div>
        </a>
    );
}
