import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <motion.div
            className='relative flex justify-center items-center'
            initial={{
                opacity: 0,
                y: -265
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '80%', '20%',],
                y: 0
            }}
            transition={{
                duration: 2.5
            }}
        >
            <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-64  xl:h-[200px] xl:w-[200px]' />
            <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64  xl:h-[300px] xl:w-[300px] animate-ping' />
            <div className='absolute border border-[#F7AB0A] rounded-full h-[350px] w-[350px] mt-64   xl:h-[450px] xl:w-[450px] animate-pulse opacity-20' />
            <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-64  xl:h-[550px] xl:w-[550px] animate-pulse opacity-20' />
            <div className='absolute border border-[#333333] rounded-full hidden xl:inline mt-64   xl:h-[650px] xl:w-[650px] animate-ping' />
        </motion.div>
    )
}

export default BackgroundCircles