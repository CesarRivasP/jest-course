/**
 * @jest-environment node
 */

import { getDataFromApi } from '../promise';

describe('Probando Promesas', () => {
  test('Realizando una peticion a una api', (done) => { 
    const API = 'https://www.rickandmortyapi.com/api/character/';

    getDataFromApi(API)
      .then((data) => {
        console.log(data);
        
        expect(data.results.length).toBeGreaterThan(0);

        done(); //Para cuando todo este correcto, se pueda establecer que ya termino la peticion, y ahora si haga la comprobacion
        // que necesite hacer Jest
      })
  });
});