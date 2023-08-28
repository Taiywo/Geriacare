import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Button = ({text, navigate}) => {
    return (
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2
         text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500
          to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline">
        <Link to={navigate} className="text-slate-95 text-sm">{text}</Link></motion.button >
    

    )
}

export default Button