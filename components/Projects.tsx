/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    const [inDemo, setInDemo] = useState('')
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects?.map((project, i) => (
                    <motion.div
                        key={project._id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className='relative h-[190px] w-[340px] md:h-[250px] md:w-[440px] xl:w-[540px] xl:h-[300px] mt-20'>
                            <Image
                                src={urlFor(project?.image).url()}
                                alt='project'
                                width={540}
                                height={300}
                            />
                        </motion.div>
                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-xl md:text-2xl xl:text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}: </span>
                                {project?.title}
                            </h4>

                            <div className='flex items-center space-x-5 justify-center'>
                                {
                                    project.technologies.map((technology) => (

                                        <Image
                                            key={technology._id}
                                            src={urlFor(technology?.image).url()}
                                            alt='Tech'
                                            width={50}
                                            height={50}
                                        />
                                    ))
                                }
                            </div>

                            <p className='text-sm text-center md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <button className='heroButton text-white' onClick={() => window.open(project.linkToBuild)}>GitHub</button>
                            {
                                project?.linkToDemo ? (
                                    <button type='button' className='heroButton text-[#F7AB0A]' onClick={() => {
                                        window.open(project.linkToDemo)
                                    }} >Demo</button>
                                ) : (
                                    <h4 className='text-sm text-[#F7AB0A]/75'>No demo</h4>
                                )
                            }
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />

        </div >
    )
}

export default Projects