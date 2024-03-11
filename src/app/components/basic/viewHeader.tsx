export default function ViewHeader({title}: {title: string}) {
    return (
        <div className='flex flex-row justify-between p-1 items-center '>
            <h3 className='font-[Poppins] text-2xl font-extrabold my-2'>{title}</h3>
            <div className=' flex w-48 h-16 px-4 text-sm font-[Poppins]  justify-around items-center rounded-xl'></div>
        </div>
    );
}
