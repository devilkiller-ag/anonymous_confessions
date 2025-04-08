import { useEffect, useState } from 'react';
import config from '@/config/config';


const Confession = ({ confession, onReact }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const createdAt = new Date(confession.createdAt);
    const expiry = createdAt.getTime() + config.confession_expiry;
    return Math.max(0, Math.floor((expiry - Date.now()) / 1000));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) clearInterval(interval);
        return Math.max(0, prev - 1);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 w-full">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <h3 className='font-bold'>User: {confession._id}</h3>
        <span>⏳ {timeLeft}s left</span>
      </div>
      <p className="text-gray-800 mb-2">{confession.message}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex gap-2">
          <button onClick={() => onReact(confession._id, 'upvote')} className="hover:text-green-500 cursor-pointer">👍 {confession.upvotes}</button>
          <button onClick={() => onReact(confession._id, 'downvote')} className="hover:text-red-500 cursor-pointer">👎 {confession.downvotes}</button>
        </div>
      </div>
    </div>
  )
}

export default Confession;
