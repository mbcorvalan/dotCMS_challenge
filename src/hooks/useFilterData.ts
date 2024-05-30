import { useState } from 'react';

export const useFilterData = () => {
	const [selectedOption, setSelectedOption] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	return {
		selectedOption,
		handleChange,
	};
};
