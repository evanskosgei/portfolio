/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLaptop } from "react-icons/fa6";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className="relative font-sans mt-20 bg-gray-100 px-4">
                <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border border-green-500 bg-gray-100 p-2">
                < FaLaptop className="h-full w-full text-slate-700 object-contain" /></div>
                <p className="py-10 text-center text-gray-700">© {year} Evans Kosgei</p>
            </footer>

        </div>
    )
}

export default Footer;