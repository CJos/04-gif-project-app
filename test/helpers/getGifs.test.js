import { string } from 'prop-types';
import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en Get GIFs', () => {
  test('Debe de retornar un arreglo de GIFs', async () => {
    const gifs = await getGifs('One Punch');
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
