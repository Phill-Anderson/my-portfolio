import React, { useEffect } from 'react'
import Image from 'next/image'
import { init } from 'ityped'
function Header() {
    useEffect(() => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['ReactJS маш сайн мэднэ!', 'NextJS бас мэднэ!!!', 'NodeJS, ExpressJS мэднэ!', 'MySQL, MongoDB мэднэ!!!', 'мундаг байгааздэ!!!'] })
    }, [])
    return (
        <div className='bg-hero-pattern p-4'>
            <div className='relative'>
                <Image src='https://elanta.app/nazar/arter-demo/img/bg.jpg' layout='responsive' objectFit="cover" width='100%' height='100px' alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-[#1e1e28] opacity-80'>
                    <div className='text-5xl text-white text-center font-bold pt-14 px-16'>Миний Портфолиод тавтай морил!</div>
                    <div className='text-white text-center p-10'>Би <span id="myElement"></span></div>
                    <div className='text-center'><button className='bg-[#FFC107] px-10 py-3 text-[12px] font-bold uppercase shadow-md'>Explore Now</button></div>
                </div>
            </div>
            <div className='flex text-white'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className='flex'><div className='text-yellow-400'>2+</div> жилийн туршлага </div>
                    <div className='flex'><div className='text-yellow-400'>250+</div> цагийн трейнинг</div>
                    <div className='flex'><div className='text-yellow-400'>30</div>Кодчилолын чейлэнж</div>
                    <div className='flex'><div className='text-yellow-400'>3</div> бодит төсөл  </div>
                </div>
            </div>
        </div>
    )
}

export default Header
