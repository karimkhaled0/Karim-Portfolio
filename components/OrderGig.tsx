import { ArrowPathIcon, ClockIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const OrderGig = (props: Props) => {
    const [basic, setBasic] = useState(true)
    const [standard, setStandard] = useState(false)
    const [premium, setPremium] = useState(false)

    const basicHandler = () => {
        setBasic(true)
        setStandard(false)
        setPremium(false)
    }
    const standardHandler = () => {
        setBasic(false)
        setStandard(true)
        setPremium(false)
    }
    const premiumHandler = () => {
        setBasic(false)
        setStandard(false)
        setPremium(true)
    }
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>ORDER</h3>
            <div className='flex lg:flex-row flex-col lg:space-x-2'>
                <div className='flex flex-col lg:space-y-10 md:space-y-20 mt-24'>
                    <div className='space-y-2'>
                        <h4 className='text-xl md:text-xl xl:text-3xl font-semibold text-center uppercase'>I will be your full stack web app using </h4>
                        <h4 className='underline decoration-[#F7AB0A]/50 uppercase text-xl md:text-xl xl:text-3xl font-semibold text-center'>react, nextjs, nodejs and mongodb</h4>
                    </div>
                    <div className='flex items-center justify-center lg:w-[550px] lg:h-[300px] md:w-[400px] h-[150px]'>
                        <Image
                            src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/296313361/original/e16e91d884312cc8d3e9b69eabe1a34cfd6c0565/be-your-fullstack-web-developer-using-reactjs-and-nodejs.jpg"}
                            alt='Gig'
                            width={550}
                            height={300}
                        />
                    </div>
                    <div className='flex items-center justify-center space-x-10'>
                        <a target={'_blank'} href="https://www.fiverr.com/karim_k9" rel="noreferrer">
                            <button className='heroButton text-white text-base'>Visit my Fiverr Profile</button>
                        </a>
                        <a target={'_blank'} href="https://www.fiverr.com/karim_k9/be-full-stack-web-app-using-react-nextjs-nodejs-and-mongodb" rel="noreferrer">
                            <button className='heroButton lg:hidden md:block text-base text-[#F7AB0A]'>Order</button>
                        </a>
                    </div>
                </div>
                <div className='h-[500px] md:hidden lg:flex flex-col w-[415px] border-white border mt-24'>
                    <div className='flex justify-between'>
                        <button onClick={basicHandler} className={basic ? 'h-20 w-full mx-auto text-xl border-r-2 border-b-8 cursor-pointer bg-white text-black font-bold border-b-yellow-600' : 'h-20 w-full mx-auto text-xl border-r-2 border-b cursor-pointer bg-white text-black font-bold'}>Basic</button>
                        <button onClick={standardHandler} className={standard ? 'h-20 w-full mx-auto text-xl border-r-2 border-b-8 cursor-pointer bg-white text-black font-bold border-b-yellow-600' : 'h-20 w-full mx-auto text-xl border-r-2 border-b cursor-pointer bg-white text-black font-bold'}>Standard</button>
                        <button onClick={premiumHandler} className={premium ? 'h-20 w-full mx-auto text-xl border-r-2 border-b-8 cursor-pointer bg-white text-black font-bold border-b-yellow-600' : 'h-20 w-full mx-auto text-xl border-r-2 border-b cursor-pointer bg-white text-black font-bold'}>Premium</button>
                    </div>
                    {/* Basic */}
                    {
                        basic && (
                            <div className='space-y-2'>
                                <div className='flex justify-between p-8'>
                                    <h2 className='text-xl font-semibold uppercase'>Basic</h2>
                                    <h3 className='text-xl font-semibold'>$30</h3>
                                </div>
                                <p className='text-center text-base font-semibold'>I will make a Frontend website - 3 pages</p>
                                <div className='py-5 flex items-center justify-around'>
                                    <div className='flex items-center space-x-2'>
                                        <ClockIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>2 Days Delivery</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <ArrowPathIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>Unlimited Revision</h4>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>3 Pages</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Design customization</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Content upload</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Responsive design</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Source code</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* Standard */}
                    {
                        standard && (
                            <div>
                                <div className='flex justify-between p-8'>
                                    <h2 className='text-xl font-semibold uppercase'>Standard</h2>
                                    <h3 className='text-xl font-semibold'>$320</h3>
                                </div>
                                <p className='text-center text-base font-semibold'>I will make a Full stack web application - 6 pages</p>
                                <div className='py-5 flex items-center justify-around'>
                                    <div className='flex items-center space-x-2'>
                                        <ClockIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>10 Days Delivery</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <ArrowPathIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>Unlimited Revisions</h4>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>6 Pages</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Design customization</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Content upload</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Responsive design</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Source code</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* Premium */}
                    {
                        premium && (
                            <div>
                                <div className='flex justify-between p-8'>
                                    <h2 className='text-xl font-semibold uppercase'>PREMIUM</h2>
                                    <h3 className='text-xl font-semibold'>$800</h3>
                                </div>
                                <p className='text-center text-base font-semibold'>I will make a Full stack web application - 10 pages</p>
                                <div className='py-5 flex items-center justify-around'>
                                    <div className='flex items-center space-x-2'>
                                        <ClockIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>21 Days Delivery</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <ArrowPathIcon
                                            className='h-5 w-5 text-white'
                                        />
                                        <h4 className='text-lg font-bold'>Unlimited Revision</h4>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>10 Pages</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Design customization</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Content upload</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Responsive design</h4>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <CheckCircleIcon
                                            className='h-4 w-4 text-green-600'
                                        />
                                        <h4 className='text-lg font-semibold'>Source code</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <a target={'_blank'} href="https://www.fiverr.com/karim_k9/be-full-stack-web-app-using-react-nextjs-nodejs-and-mongodb" rel="noreferrer">
                        <button className='heroButton w-full mx-auto rounded-none my-5 text-lg flex-grow tracking-[15px] text-[#F7AB0A]'>Order</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default OrderGig