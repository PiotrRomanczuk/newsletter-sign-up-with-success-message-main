import React from 'react';

const FormValidations = (email: string) => {
	const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	const result: boolean = expression.test(email);

	return result;
};

export default FormValidations;
