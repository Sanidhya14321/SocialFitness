import React from "react"
import { motion } from "framer-motion"

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        className="bg-white shadow-md rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6">
          <div className="flex items-center mb-6">
            <img src="/placeholder.svg?height=100&width=100" alt="Profile" className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Fitness Enthusiast</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Bio</h2>
            <p className="text-gray-700">
              Passionate about fitness and helping others achieve their health goals. NASM certified personal trainer
              with 5 years of experience.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Stats</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">150</p>
                <p className="text-gray-600">Workouts</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1,250</p>
                <p className="text-gray-600">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">500</p>
                <p className="text-gray-600">Following</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Profile

