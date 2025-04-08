import { useState } from 'react';

const InputBox = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-t p-3 bg-white">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none"
        maxLength={200}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your confession..."
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">Submit</button>
    </form>
  );
};

export default InputBox;
