import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header flex justify-between items-center box-border text-gray-500 ">
      <div className="w-1/12">
        <img className="w-20 ml-5 hover:text-gray-900" src={logo} alt="Logo" />
      </div>
      <div className="w-7/12 box-border">
        <input
          className="w-full bg-gray-200 py-2 px-3 rounded-full hover:border hover:border-gray-300 hover:border-1 hover:box-border"
          placeholder=" Serch Image Here"
        />
      </div>

      <ul className="flex w-2/12 justify-around p-2 border border-y-white border-l-white border-r-gray-300">
        <li className="hover:text-gray-900">Explore</li>
        <li className="hover:text-gray-900">Advertise</li>
        <li className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Gallary+
        </li>
      </ul>
      <div className="flex w-2/12 justify-around items-center p-2">
        <div className="hover:text-gray-900">Log in</div>
        <button className="border rounded-md border-gray-400 hover:border-gray-900 hover:text-gray-900 p-1">
          Submit a photo
        </button>
        <button>📜</button>
      </div>
    </div>
  );
};

export default Header;
