import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { AnimatePresence } from 'framer-motion';
import config from '@/config/config';
import Navbar from '@/components/Navbar';
import InputBox from '@/components/InputBox';
import Confession from '@/components/Confession';
import { Toaster } from '@/components/ui/sonner';
import { fetchConfessions, postConfession, reactToConfession } from '@/api/confessionService';
import '@/App.css';
import { showError } from './lib/toast';


const socket = io(config.socket_url);

const App = () => {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    fetchConfessions().then((result) => {
      if (result.success && result.data.success) {
        setConfessions(Array.isArray(result.data.data) ? result.data.data : []);
      } else {
        console.log("ERROR IN FETCHING CONFESSION: No confessions found: ", result.message || result.data.message);
      }
    });
  }, []);

  useEffect(() => {
    socket.on('new_confession', (conf) => {
      try {
        setConfessions(prev => [conf, ...prev]);
      } catch (err) {
        console.error('Socket Error (new_confession):', err);
      }
    });

    socket.on('update_reaction', (updated) => {
      try {
        setConfessions(prev => prev.map((c) => c._id === updated._id ? updated : c));
      } catch (err) {
        console.error('Socket Error (update_reaction):', err);
      }
    });

    socket.on('confession_expired', (id) => {
      try {
        setConfessions((prev) => prev.filter((c) => c._id !== id));
      } catch (err) {
        console.error('Socket Error (confession_expired):', err);
      }
    })

    return () => {
      socket.off('new_confession');
      socket.off('update_reaction');
      socket.off('confession_expired');
    };
  }, []);

  const handleSubmitConfession = async (message) => {
    const result = await postConfession(message);
    if (!result.success || !result.data.success) {
      showError(result.message || result.data.message);
      console.log("ERROR IN SUBMITTING CONFESSION: ", result.message || result.data.message);
    }
  }

  const handleReaction = async (id, type) => {
    const result = await reactToConfession(id, type);
    if (!result.success || !result.data.success) {
      showError(result.message || result.data.message);
      console.log("ERROR IN REACTING TO CONFESSION: ", result.message || result.data.message);
    }
  }

  return (
    <div className='flex flex-col h-screen bg-gray-100 md:px-40 xl:px-80'>
      <Navbar />
      <Toaster position="top-right" richColors />
      <div className='flex-1 overflow-y-auto p-4'>
        {confessions.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 text-lg">
            No confessions found.
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {confessions.map((conf) => (
              <Confession
                key={conf._id}
                confession={conf}
                onReact={handleReaction}
              />
            ))}
          </AnimatePresence>
        )}
      </div>
      <InputBox onSubmit={handleSubmitConfession} />
    </div>
  );
}

export default App;
