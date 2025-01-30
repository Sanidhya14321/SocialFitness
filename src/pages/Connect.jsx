import React from "react"
import { motion } from "framer-motion"

const UserCard = ({ name, role, connections }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
    <img src="/placeholder.svg?height=100&width=100" alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    <h2 className="text-xl font-semibold text-center mb-2">{name}</h2>
    <p className="text-gray-600 text-center mb-4">{role}</p>
    <p className="text-gray-700 text-center">{connections} mutual connections</p>
    <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
      Connect
    </button>
  </motion.div>
)

const Connect = () => {
  const users = [
    { name: "Alex Thompson", role: "Personal Trainer", connections: 15 },
    { name: "Lily Chen", role: "Yoga Instructor", connections: 8 },
    { name: "Marcus Johnson", role: "Nutritionist", connections: 12 },
    { name: "Sophia Rodriguez", role: "CrossFit Coach", connections: 20 },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Connect with Professionals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  )
}

export default Connect

