import React, { useState } from 'react';

const Input = () => {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input
        className="w-1/2 p-2  border border-gray-600 rounded-md focus:bg-slate-300"
        placeholder="Serch Your Image Category Here 😎"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
