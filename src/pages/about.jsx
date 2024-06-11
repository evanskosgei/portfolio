/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => {
    return (
        <div className='items-center font-sans justify-center bg-gray-50'>
            <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
                <div className="mx-auto max-w-xl lg:max-w-screen-xl">
                    <div className="sm:flex items-center max-w-screen-xl">
                        <div className="sm:w-1/2 p-10">
                            <div className="image object-center text-center">
                                <img src="https://i.imgur.com/WbQnbas.png" />
                            </div>
                        </div>
                        <div className="sm:w-1/2 p-5">
                            <div className="text">
                                <span className="text-slate-700 border-b-2 border-green-500 uppercase">About me</span>
                                <h2 className="my-4 font-bold text-3xl sm:text-4xl text-slate-700 ">About <span className="text-green-500">Me</span>
                                </h2>
                                <p className="text-gray-700">
                                    Experienced Full Stack Developer with a passion for dynamic web project development at every stage. Known for my inquisitive nature and energy, I possess strong programming logic and expertise in cross-platform coding. I seek to leverage my development skills through collaboration, team building, and effective communication, always aiming for creative solutions. With a solid foundation in project management and customer relations, I strive to deliver high-quality results and foster positive client interactions.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About