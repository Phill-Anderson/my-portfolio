import React from 'react'
import { DotsVerticalIcon, ViewListIcon } from '@heroicons/react/solid'
function Menu() {
    return (
        <div className='flex justify-between text-[#8c8c8e] p-6 shadow-lg bg-[#20202a]'>
            <DotsVerticalIcon className='h-5 cursor-pointer' />
            <ViewListIcon className='h-5 cursor-pointer' />
        </div>
    )
}

export default Menu
