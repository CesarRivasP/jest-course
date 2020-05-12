import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobar que existe un elemento', () => {
	test('¿Contiene una banana el array?', () => {
		expect(arrayFruits()).toContain('Banana');
	});

	test('No contiene platano', () => {
		expect(arrayFruits()).not.toContain('platano');
	});

	test('Comprobar el tamaño de un array', () => {
		expect(arrayFruits()).toHaveLength(4);
	});

	test('Comprobar que existe un color', () => {
		expect(arrayColors()).toContain('Amarillo');
	});
});
