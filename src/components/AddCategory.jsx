import { useState } from 'react';
import PropTypes from 'prop-types';

// Estamos pasando por parámetro la función que hemos creado anteriormente para insertar las categorías.
export const AddCategory = ({ onNewCategory }) => {
  // Creamos un Hook en el cual determinamos el valor del campo.
  const [inputValue, setInputValue] = useState('');

  // Creamos una función para que se pinte lo que estamos escribiendo sobre el campo.
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // Creamos una función para el momento en el que enviamos el formulario (clicamos "Enter").
  const onSubmit = (event) => {
    // console.log('Hola Mundo des de onSubmit');
    event.preventDefault(); //Esta función hace que no haya refresco, por lo tanto no perdamos el valor que hemos escrito.

    if (inputValue.trim().length <= 1) return; // Realizamos este condicionante para que, si no escibimos nada en el campo, no se ejecute la función de busqueda.

    // setCategories((categories) => [inputValue, ...categories]); // Llamamos a la función que le hemos pasado por parámetro para que ejecute, en este caso, el cambio de la categoría.
    onNewCategory(inputValue.trim());
    setInputValue(''); // Reestablecemos el valor del campo como vacío.
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
