import { 
	isTrue, 
	isFalse, 
	isUndefined, 
	isNull 
} from '../true';

describe('Probar resultados nulos', () => {
	test('null', () => {
		expect(isNull()).toBeNull(); //comprueba si se recibe un valor nulo de la funcion isNull
	});
});

describe('Probar resultados verdaderos', () => {
	test('true', () => {
		expect(isTrue()).toBeTruthy();
	});
});

describe('Probar resultados falsos', () => {
	test('false', () => {
		expect(isFalse()).toBeFalsy();
	});
});

describe('Probar resultados undefined', () => {
	test('undefined', () => {
		expect(isUndefined()).toBeUndefined();
	});
});

describe('Probar resultados no verdaderos', () => {
	test('falso o verdadero', () => {
		expect(isFalse()).not.toBeTruthy();
	});
});