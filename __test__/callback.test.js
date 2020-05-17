import { callbackHell } from '../callback';


describe('Probando un callback', () => {
test('Callback', (done) => {
		function otherCallback(data){
			expect(data).toBe('Hola Javascripters!');
			 // otherCallback va a pasar los valores que se han creado en el archivo callbackHell para su evaluacion
			done();	//Hasta que no pase por done, no empieza a realizar la comprobacion de los valores
		}

		callbackHell(otherCallback);
	});
});