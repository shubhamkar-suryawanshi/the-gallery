import React from 'react';
import { useSelector } from 'react-redux';

const Saved = () => {
  const savedItems = useSelector((store) => store.cart.savedURLs);
  const likedItems = useSelector((store) => store.cart.likedURLs);

  return (
    <div className="m-10 space-y-8">
      <h1 className="font-bold text-2xl">Saved Photos - {savedItems.length}</h1>
      <div className="flex space-x-4">
        {savedItems.map((item, index) => {
          return (
            <div key={index} className="">
              <img
                className="w-[100px]  border-4 border-orange-400"
                src={item}
              />
            </div>
          );
        })}
      </div>
      <h2 className="font-bold text-2xl">Liked Photos - {likedItems.length}</h2>
      <div className="flex space-x-4">
        {likedItems.map((item, index) => {
          return (
            <div key={index} className="">
              <img
                className="w-[100px] border-orange-400 border-4"
                src={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Saved;
