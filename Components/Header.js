import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-4'>
            <h1 id='headerHeading' className=' uppercase z-20 mt-10'>Designer Web</h1>
            <Image
                src="/cloud.svg"
                width="1100"
                height="200"
                alt="Picture of the author"
                className='mt-[-4rem] mb-[-2rem] w-[30vw] h-auto absolute top-[18%] left-[42%] z-10'
                id='cloud'
            />
            <Image
                src="/cloud5.svg"
                width="1100"
                height="200"
                alt="Picture of the author"
                className='mt-[-4rem] mb-[-2rem] w-[34vw] h-auto absolute top-[10%] left-[30%] z-10'
                id='cloud5'
            />

            <Image
                src="/cloud3.svg"
                width="1100"
                height="200"
                alt="Picture of the author"
                className='mt-[-4rem] mb-[-2rem] w-[19vw] h-auto absolute top-[10%] left-[60%]'
                id='cloud3'
            />

            <Image
                src="/cloud4.svg"
                width="1100"
                height="200"
                alt="Picture of the author"
                className='mt-[-4rem] mb-[-2rem] w-[20vw] h-auto absolute top-[10%] left-[7.5%]'
                id='cloud4'
            />

            <Image
                src="/cloud2.svg"
                width="1100"
                height="200"
                alt="Picture of the author"
                className='mt-[-4rem] mb-[-2rem] w-[20vw] h-auto absolute top-[23%] left-[74%]'
                id='cloud2'
            />
        </div>
    )
}

export default Header
