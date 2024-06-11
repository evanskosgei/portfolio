/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div>
            <section className="bg-white font-sans z-10">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center">
                        <p className="font-bold text-slate-700 text-3xl sm:text-4xl">Contact Me</p>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Reach Out</h1>
                        <p className="text-slate-700">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-white rounded-full bg-green-500/80">
                                <HiOutlineMail className='h-8 w-8' />
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-slate-700">Email</h2>
                            <p className="mt-2 text-gray-700">Let&apos;s connect! I&apos;m just an email away.</p>
                            <p className="mt-2 text-blue-500"><a href='mailto:evanskosgei090@gmail.com'>evanskosgei090@gmail.com</a></p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-white rounded-full bg-green-500/80">
                                <FaLinkedin className='h-8 w-8' />
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-slate-700">Connect with Me</h2>
                            <p className="mt-2 text-gray-700">Let&apos;s network and grow together on LinkedIn.</p>
                            <p className="mt-2 text-blue-500 dark:text-blue-400">
                                <a href='https://www.linkedin.com/in/evans-kosgei-kibiwott/' target="_blank" rel="noopener noreferrer">
                                    Evans Kosgei
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-white rounded-full bg-green-500/80 ">
                                <FaPhone className='h-8 w-8' />
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-slate-700 ">Phone</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-700">Your vision is just a call away. Let&apos;s make it happen!</p>
                            <p className="mt-2 text-blue-500 dark:text-blue-400"><a href='tel:+254 (757) 657-268' >+254 (757) 657-268</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact;