import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const savedItems = useSelector((store) => store.cart.savedURLs);
  const likedItems = useSelector((store) => store.cart.likedURLs);

  return (
    <div className="header flex mb:justify-around sm:justify-around sm:space-x-3 mb:space-x-2 lg:space-x-4 lg:justify-between items-center box-border text-gray-500 my-2">
      <div className="w-1/12 mr-4">
        <Link to={'/'}>
          <img
            className="w-20 ml-5 hover:text-gray-900 cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="w-6/12 box-border">
        <input
          className="w-full bg-gray-200 py-2 px-3 rounded-full hover:border hover:border-gray-300 hover:border-1 hover:box-border"
          placeholder="Serch high-resolution images"
        />
      </div>

      <ul className="lg:flex lg:w-2/12 lg:justify-around lg:p-2 lg:border lg:border-y-white lg:border-l-white lg:border-r-gray-300 mb:hidden sm:hidden md:hidden ">
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to={'/explore'}>Explore</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to={'/advertise'}>Advertise</Link>
        </li>
        <li className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <Link to={'/login'}> Gallary+</Link>
        </li>
      </ul>
      <div className="flex lg:w-3/12 md:w-4/12 justify-around items-center p-2">
        <div className="hover:text-gray-900 mb:hidden sm:hidden md:inline-block cursor-pointer">
          <Link to={'/login'}>Log in</Link>
        </div>
        <button className="mb:hidden sm:hidden md:inline-block md:border md:rounded-md md:border-gray-400 md:hover:border-gray-900 md:hover:text-gray-900 md:p-1">
          <Link to={'/login'}>Submit a photo</Link>
        </button>
        <button>
          <Link to={'/liked'}>
            📜-[{savedItems.length}][{likedItems.length}]
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
