import React from 'react';
import { useState } from 'react';

export const GifProjectApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
      {/* Titulo */}
      <h1>GifProjectApp</h1>

      {/* Input */}

      {/* Listado de GIF */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* Item GIF */}
    </>
  );
};
