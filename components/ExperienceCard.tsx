/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
         w-[350px] md:w-[500px] snap-center bg-[#292929] p-10 xl:p-8 opacity-40 hover:opacity-100 cursor-pointer
          transition-opacity duration-200 overflow-hidden mt-[120px] md:mt-[150px]'>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <Image
                    className='rounded-full object-cover object-center'
                    src={urlFor(experience?.companyImage).url()}
                    alt='Company Image'
                    width={96}
                    height={96}
                />
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='font-light text-3xl'>{experience.jobTitle}</h4>
                <p className='font-bold text-xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {
                        experience.technologies.map((technology) => (
                            <Image
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                alt='Technology'
                                width={40}
                                height={40}
                                className='rounded-full'
                            />
                        ))
                    }
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} -
                    {experience.isCurrentlyWorkingHere ?
                        ' present' :
                        new Date(experience.dateEnded).toDateString()}</p>
                <ul className='list-disc space-y-4 ml-5 text-sm h-40 overflow-y-scroll scrollbar-none w-full pb-5'>
                    {
                        experience.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))
                    }
                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard