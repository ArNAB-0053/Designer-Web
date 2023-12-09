import Link from 'next/link'
import React from 'react'
import '../app/globals.css'

const Body = ({ link, heading, desc }) => {
    return (
        <Link href={link} >
            <div id='container' className='relative flex flex-col gap-y-4 items-center justify-center z-40'>
                <h1 id='heading' className='uppercase place-self-center text-center opacity-100 '>{heading}</h1>
                <p id='desc' className='place-self-center text-center opacity-100'>{desc}</p>
                <div className="water">
                    <svg id='rightArrow' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right absolute left-[25%] top-[28%] w-[6rem] h-[6rem]" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>                    
                </div>
            </div>
        </Link>
    )
}

export default Body
