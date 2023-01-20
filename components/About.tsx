/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center
             md:text-left md:flex-row mac-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.2
                }}
                className='w-48 h-48 mt-24 md:w-72 md:h-96 xl:w-[400px] xl:h-[460px] -mb-12 md:mb-0 flex-shrink-0'>
                <Image
                    className='
                rounded-full object-cover md:rounded-lg'
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt='Profile Pic'
                    width={400}
                    height={400}
                />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 md:mt-20'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-sm md:text-base lg:text-lg h-32 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/20 overflow-y-scroll md:overflow-y-hidden md:h-full'>
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About