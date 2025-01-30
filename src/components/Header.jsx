import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="text-2xl font-bold">
            FitConnect
          </Link>
        </motion.div>
        <motion.ul
          className="flex space-x-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/profile" className="hover:text-blue-200">
              Profile
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/feed" className="hover:text-blue-200">
              Workout Feed
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/connect" className="hover:text-blue-200">
              Connect
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  )
}

export default Header
