import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
    name: String,
    email: String,
    subject: String,
    message: String
};

type Props = {
    pageInfo: PageInfo
}

const ContactMe = ({ pageInfo }: Props) => {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:karimkhaledelmawe@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10 mt-20'>
                <h4 className='text-xl md:text-2xl xl:text-3xl font-semibold text-center'>
                    I have got what you need.{' '}
                    <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
                </h4>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-3 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-lg'>{pageInfo.phoneNumber}</p>
                    </div>
                    <div className='flex items-center space-x-3 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p>{pageInfo.address}</p>
                    </div>
                    <div className='flex items-center space-x-3 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p>{pageInfo.email}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input
                            {...register('name')}
                            className='contactInput'
                            type="text"
                            placeholder='Name' />
                        <input
                            {...register('email')}
                            className='contactInput'
                            type="email"
                            placeholder='Email' />
                    </div>
                    <input
                        {...register('subject')}
                        className='contactInput'
                        type="text"
                        placeholder='Subject' />
                    <textarea
                        {...register('message')}
                        className='contactInput'
                        placeholder='Message' />
                    <button
                        type='submit'
                        className='bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe