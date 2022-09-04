import React from 'react';
import { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifProjectApp = () => {
  // Creamos un Hook para poder utilizar las Categorias en otros sitios.
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // -- Mejor no utilizar la función "Push", ya que puede mutar el elemento.
    // categories.push('Valorant');

    // Manera de insertar categorias 1. El orden aquí, afecta al orden de la lista.
    // setCategories([...categories, 'Valorant']);

    // Manera de insertar categorias 2.
    if (categories.includes(newCategory)) return;

    setCategories((categories) => [...categories, newCategory]);
  };

  return (
    <>
      <h1>GifProjectApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
