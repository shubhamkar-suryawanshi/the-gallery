import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/bg-img.jpg';

const customStyle = {
  backgroundImage: "url('../assets/bg-img.jpg')",
};

const Main = () => {
  const [query, setQuery] = useState('');
  const [imgs, setImgs] = useState([]);
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
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1679847318~exp=1679847918~hmac=4d7dcb99ad018086096173f7d7c49505020426a3e120db529f1f1507de9f1165')`,
      }}
      className="w-full h-[90vh] bg-no-repeat bg-cover h-5"
    >
      <div className="search  ml-60 mb-60 space-y-5">
        <div className="text-white pt-60 space-y-5">
          <h1 className="font-bold text-4xl">The Gallary</h1>
          <h4> The internet’s source for visuals.</h4>
          <h5>Powered by creators everywhere.</h5>
        </div>
        <input
          className="w-1/2 p-2  border border-gray-600 rounded-md"
          placeholder="Serch Your Image Category Here 😎"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="ml-1 p-2 bg-gradient-to-r from-white to-transparent border border-gray-600 rounded-md"
          onClick={downloadImages}
        >
          Search
        </button>
      </div>
      <div
        id="gallery"
        className="flex flex-wrap justify-center items-center space-x-20 space-y-20"
      >
        {imgs.map((i) => {
          return (
            <img
              className="w-1/4  hover:shadow-2xl hover:shadow-gray-700"
              key={i.id}
              src={i.urls.regular}
              alt="Query"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
