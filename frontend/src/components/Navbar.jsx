import { Card } from '@/components/ui/card';

const Navbar = () => {
  return (
    <Card className='container bg-card py-3 px-4 border-0 flex flex-row items-center justify-between gap-6 rounded-2xl mt-5'>
      <div className='flex items-center gap-6'>
        <img src='/icon.svg' alt='Anonymous Confessions' className='w-10 h-10' />
        <p className='font-bold'>Anonymous Confessions</p>
      </div>

      <div className='flex items-center'>
        <a
          className='hidden md:block ml-2 mr-2 h-9 px-4 py-2 has-[>svg]:px-3 rounded-md cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90'
          href='https://github.com/devilkiller-ag/anonymous_confessions'
          target='_blank'
        >
          GitHub
        </a>
      </div>
    </Card>
  );
};

export default Navbar;