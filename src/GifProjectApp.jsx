import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifProjectApp = () => {
  // Creamos un Hook para poder utilizar las Categorias en otros sitios.
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    // -- Mejor no utilizar la función "Push", ya que puede mutar el elemento.
    // categories.push('Valorant');

    // Manera de insertar categorias 1. El orden aquí, afecta al orden de la lista.
    // setCategories([...categories, 'Valorant']);

    // Manera de insertar categorias 2.
    setCategories((categories) => [...categories, 'Valorant']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifProjectApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

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
