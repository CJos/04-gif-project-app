import PropTypes from 'Prop-types';

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/* Tarea

1. Añadir PropTypes
  a. title obligatorio.
  b. url obligatorio.
2. Evaluar el snapshot.

*/
