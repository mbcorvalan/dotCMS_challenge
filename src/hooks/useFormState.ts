import { useState } from 'react';

export const useFormState = <T>(initialState: T) => {
	const [state, setState] = useState<T>(initialState);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const resetState = () => {
		setState(initialState);
	};

	return [state, handleChange, resetState] as const;
};
