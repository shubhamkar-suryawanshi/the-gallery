import React, { useState } from 'react';
import { img_array } from '../shared/constants';

const Main = () => {
  const [query, setQuery] = useState('');
  const [imgs, setImgs] = useState([]);
  const [firstLoad, setFirstLoad] = useState(img_array);
  const [loader, setLoader] = useState(true);
  // x0tJ-Soxc5SyCMnHXpuW6eod9MpHfx7nLMbMQsoQuvA access key
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  const downloadImages = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=x0tJ-Soxc5SyCMnHXpuW6eod9MpHfx7nLMbMQsoQuvA&per_page=${20}&query=${query}&orientation=squarish`
    );
    const json = await data.json();

    // console.log(json);
    setImgs(json.results);
    setQuery('');
    setLoader(false);
    setFirstLoad([]);
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1679847318~exp=1679847918~hmac=4d7dcb99ad018086096173f7d7c49505020426a3e120db529f1f1507de9f1165')`,
      }}
      className="w-full mb:h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-no-repeat bg-cover"
    >
      <div className="mb:ml-4 sm:ml-8 mb:mb-32 sm:mb-32 space-y-5 lg:ml-72 lg:mb-80 ">
        <div className="text-white mb:pt-10  pt-40 space-y-5">
          <h1 className="font-bold text-4xl">The Gallary</h1>
          <div>
            <h4 className=" text-xl">The internet’s source for visuals.</h4>
            <h5 className=" text-xl">Powered by creators everywhere.</h5>
          </div>
        </div>
        <div className="mb:hidden sm:hidden md:block">
          <input
            className="w-1/2 p-2  border border-gray-600 rounded-md focus:bg-slate-300"
            placeholder="Serch high-resolution images"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            className="ml-1 p-2 bg-gradient-to-r from-white to-transparent border border-gray-600 rounded-md hover:bg-orange-400 hover:shadow-md"
            onClick={downloadImages}
          >
            <a href="#gallery">Search</a>
          </button>
        </div>
      </div>

      <div
        id="gallery"
        className="flex mb:flex-col sm:flex-col md:flex-row flex-wrap justify-center items-center space-x-20 mb:space-x-0 sm:space-x-0 md:space-x-10 lg:space-x-20 space-y-20"
      >
        {loader
          ? firstLoad.map((imgUrl, index) => {
              return (
                <div className="relative">
                  <img
                    className="w-[275px] hover:opacity-70  hover:shadow-2xl hover:shadow-gray-700"
                    key={index}
                    src={imgUrl}
                    alt="MyImgs"
                  />
                  <button className="bg-white font-bold text-xl w-10 h-10 text-center content-center  absolute left-5 top-5 text-black  rounded-sm inline-block">
                    🧡
                  </button>
                  <button className="bg-white font-bold text-xl w-10 h-10 text-center content-center  absolute right-5 top-5 text-black inline-block rounded-sm ">
                    +
                  </button>
                </div>
              );
            })
          : imgs.map((i) => {
              return (
                <div className="relative">
                  <img
                    className="w-[275px] hover:opacity-70  hover:shadow-2xl hover:shadow-gray-700"
                    key={i.id}
                    src={i.urls.regular}
                    alt="Query"
                  />
                  <button className="bg-white font-bold text-xl w-10 h-10 text-center content-center  absolute left-5 top-5 text-black  rounded-sm inline-block">
                    🖤
                  </button>
                  <button className="bg-white font-bold text-xl w-10 h-10 text-center content-center  absolute right-5 top-5 text-black inline-block rounded-sm ">
                    +
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Main;
