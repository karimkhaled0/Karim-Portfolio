import Image from 'next/image'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `The Name's ${pageInfo?.name}`,
            "<LoveToCode />",
            "console.log('Developer')",
            "GuyWhoLovesCoffe.tsx"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <div className='mt-40'>
                <BackgroundCircles />
            </div>
            <div>
                <Image
                    className='relative rounded-full mx-auto'
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt='Profile'
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-xl md:text-2xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

            </div>
            <div className='pt-5 space-x-2 z-20 md:space-x-5 grid grid-cols-3 gap-y-2 md:flex md:flex-row '>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton col-start-2'>Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero