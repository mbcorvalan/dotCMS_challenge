import { useState } from 'react';

export const useErrorCreateForm = () => {
	const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

	const setError = (field: string, error: string | null) => {
		setErrors((prevErrors) => ({
			...prevErrors,
			[field]: error,
		}));
	};

	return [errors, setError] as const;
};
