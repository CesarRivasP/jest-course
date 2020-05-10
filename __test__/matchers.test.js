describe('Comparadores comunes', () => {
	const user = {
		name: 'Cesar',
		lastName: 'Rivas'
	};

	// const user2 = {
	// 	name: 'Cesar',
	// 	lastName: 'Rivas'
	// };

	 const user2 = {
		name: 'Andres',
		lastName: 'Rivas'
	};

	test('Igualdad de elementos', () => {
		expect(user).toEqual(user2);
	});

	test('No son exactamente iguales', () => {
		expect(user).not.toEqual(user2);
	});
});