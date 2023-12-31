import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-button p-6 fixed top-0 left-0 right-0 z-10'>
      <div className='container mx-auto flex items-center justify-between'>

        <Link to='/' className='text-white text-xl font-bold ' id='logo'>
          Disney Characters
        </Link>


        <div className='flex items-center'>
          <Link to='/search' className='text-white hover:underline mx-4'>
            <span className="material-symbols-outlined">
              search
            </span>
          </Link>
          <Link to='/favorites' className='text-white hover:underline'>
            <span className="material-symbols-outlined">
              favorite
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
