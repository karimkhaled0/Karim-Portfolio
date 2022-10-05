/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Skill } from '../typings'
import Image from 'next/image'
import { urlFor } from '../sanity'
import { motion } from 'framer-motion'

type Props = {
    skill: Skill;
    directionLeft?: boolean
}

const Skill = ({ skill, directionLeft }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1, x: 0
                }}
                transition={{
                    duration: 1.5
                }}
                viewport={{ once: true }}
                className='rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 
                md:w-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'>
                <Image
                    src={urlFor(skill.image).url()}
                    alt='Skill'
                    width={96}
                    height={96}
                />
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 
            ease-in-out group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:w-24 xl:h-24 z-0 rounded-full'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl md:text-3xl font-bold text-black opacity-100'>{skill.progress}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill