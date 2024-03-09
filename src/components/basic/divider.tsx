function Divider({ children }: any) {
    return (
        <div className='flex items-center mt-8'>
            <div className='flex-1 border-t border-gray-200'></div>
            <div className='px-4 text-sm text-gray-500'>{children}</div>
            <div className='flex-1 border-t border-gray-200'></div>
        </div>
    );
}

export default Divider;
