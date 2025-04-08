const Navbar = () => {
  return (
    <div className="w-full bg-gray-100 text-black p-4 shadow-md text-xl font-semibold flex items-center justify-between rounded-lg">
      <div className='flex items-center gap-6'>
        <img src='/icon.svg' alt='Anonymous Confessions' className='w-10 h-10' />
        <p className='font-bold'>Anonymous Confessions</p>
      </div>

      <div className='flex items-center'>
        <a
          className='bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300'
          href='https://github.com/devilkiller-ag/anonymous_confessions'
          target='_blank'
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Navbar;
