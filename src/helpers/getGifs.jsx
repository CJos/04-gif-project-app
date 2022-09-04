export const getGifs = async ({ category }) => {
  // Cargamos en una variable la URL de la API con la categoría que llega por parámetro.
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JYqIDjlIySQdSlNfhMQSvJCxCuVnaaCn&q=${category}&limit=20`;
  // Realizamos la consulta a la URL.
  const resp = await fetch(url);
  // Desestructuramos la respuesta de la llamada a la API.
  const { data } = await resp.json();
  // Deserializamos cada elemento de la variable "data" y le asignamos al objeto las propiedades que necesitamos.
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);

  return gifs;
};
