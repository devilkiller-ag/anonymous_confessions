import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote } from "react-icons/bi";
import { IoTimerOutline } from 'react-icons/io5';
import { Card, CardContent } from '@/components/ui/card';
import config from '@/config/config';

const animation = {
  initial: { opacity: 0, filter: 'blur(6px)', scale: 0.95 },
  animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  exit: { opacity: 0, filter: 'blur(8px)', scale: 0.9 },
  transition: { duration: 0.4 },
}

const Confession = ({ confession, onReact }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const createdAt = new Date(confession.createdAt)
    const expiry = createdAt.getTime() + config.confession_expiry
    return Math.max(0, Math.floor((expiry - Date.now()) / 1000))
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) clearInterval(interval)
        return Math.max(0, prev - 1)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      {...animation}
      className='w-full'
    >
      <Card className='w-full shadow-md mb-4'>
        <CardContent className='space-y-2'>
          <div className='flex justify-between items-center text-sm text-gray-600'>
            <h3 className='font-bold'>User: {confession._id}</h3>
            <span className='flex items-center gap-1'><IoTimerOutline /> {timeLeft}s left</span>
          </div>
          <p className='text-gray-800'>{confession.message}</p>
          <div className='flex justify-between items-center text-sm text-gray-600'>
            <div className='flex gap-4'>
              <button
                onClick={() => onReact(confession._id, 'upvote')}
                className='hover:text-green-500 transition'
              >
                <span className='flex items-center gap-1 cursor-pointer'><BiUpvote /> {confession.upvotes}</span>
              </button>
              <button
                onClick={() => onReact(confession._id, 'downvote')}
                className='hover:text-red-500 transition'
              >
                <span className='flex items-center gap-1 cursor-pointer'><BiDownvote /> {confession.downvotes}</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Confession;
