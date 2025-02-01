import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const workoutPlans = [
  {
    id: 1,
    title: "Beginner's Full Body Workout",
    description: "A comprehensive full-body workout plan designed for beginners.",
    duration: "4 weeks",
    frequency: "3 times per week",
    exercises: [
      "Squats: 3 sets of 10 reps",
      "Push-ups: 3 sets of 8 reps",
      "Dumbbell rows: 3 sets of 10 reps per arm",
      "Plank: 3 sets of 30 seconds",
      "Lunges: 3 sets of 10 reps per leg"
    ]
  },
  {
    id: 2,
    title: "Intermediate Strength Training",
    description: "A strength-focused workout plan for those with some experience.",
    duration: "6 weeks",
    frequency: "4 times per week",
    exercises: [
      "Barbell squats: 4 sets of 8 reps",
      "Bench press: 4 sets of 8 reps",
      "Deadlifts: 3 sets of 6 reps",
      "Pull-ups: 3 sets to failure",
      "Overhead press: 3 sets of 10 reps"
    ]
  },
  {
    id: 3,
    title: "HIIT Cardio Blast",
    description: "High-intensity interval training for maximum calorie burn.",
    duration: "3 weeks",
    frequency: "3 times per week",
    exercises: [
      "Burpees: 45 seconds work, 15 seconds rest",
      "Mountain climbers: 45 seconds work, 15 seconds rest",
      "Jump squats: 45 seconds work, 15 seconds rest",
      "High knees: 45 seconds work, 15 seconds rest",
      "Plank jacks: 45 seconds work, 15 seconds rest"
    ]
  }
]

const WorkoutPlanCard = ({ plan, isOpen, toggleOpen }) => {
  return (
    <motion.div
      layout
      className="bg-white p-6 rounded-lg shadow-md mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        layout="position"
        className="text-2xl font-semibold mb-2 cursor-pointer"
        onClick={toggleOpen}
      >
        {plan.title}
      </motion.h2>
      <motion.p layout="position" className="text-gray-600 mb-2">{plan.description}</motion.p>
      <motion.div layout="position" className="text-sm text-gray-500 mb-2">
        <p>Duration: {plan.duration}</p>
        <p>Frequency: {plan.frequency}</p>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <h3 className="font-semibold mb-2">Exercises:</h3>
            <ul className="list-disc list-inside">
              {plan.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const WorkoutPlans = () => {
  const [openPlanId, setOpenPlanId] = useState(null)

  const toggleOpen = (id) => {
    setOpenPlanId(openPlanId === id ? null : id)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Workout Plans
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our curated workout plans designed for various fitness levels and goals.
      </motion.p>
      {workoutPlans.map((plan) => (
        <WorkoutPlanCard
          key={plan.id}
          plan={plan}
          isOpen={openPlanId === plan.id}
          toggleOpen={() => toggleOpen(plan.id)}
        />
      ))}
    </div>
  )
}

export default WorkoutPlans
