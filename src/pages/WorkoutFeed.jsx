import React from "react"
import { motion } from "framer-motion"

const WorkoutPost = ({ name, workout, likes, comments }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md mb-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <img src="/placeholder.svg?height=50&width=50" alt={name} className="w-12 h-12 rounded-full mr-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
    </div>
    <p className="text-gray-700 mb-4">{workout}</p>
    <div className="flex justify-between text-gray-600">
      <span>{likes} likes</span>
      <span>{comments} comments</span>
    </div>
  </motion.div>
)

const WorkoutFeed = () => {
  const workouts = [
    { name: "Sarah Johnson", workout: "Just finished a 5k run in 25 minutes! Personal best!", likes: 24, comments: 5 },
    {
      name: "Mike Chen",
      workout: "Upper body workout: 3x10 bench press, 3x12 rows, 3x15 shoulder press",
      likes: 18,
      comments: 3,
    },
    { name: "Emily Davis", workout: "1 hour yoga session focusing on flexibility and balance", likes: 32, comments: 7 },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Workout Feed</h1>
      {workouts.map((workout, index) => (
        <WorkoutPost key={index} {...workout} />
      ))}
    </div>
  )
}

export default WorkoutFeed

