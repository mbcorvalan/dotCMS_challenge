import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../redux/reducers/newsReducer';
import { AppDispatch } from '../redux/store/store';
import { useFetchResult } from '../types/interfaces';

export const useFetch = (): useFetchResult => {
	const [selectedOption, setSelectedOption] = useState<string>('');
	const dispatch: AppDispatch = useDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	const handleSubmit = useCallback(() => {
		dispatch(fetchNews({ year: selectedOption, limit: 10, offset: 0 }));
	}, [dispatch, selectedOption]);

	useEffect(() => {
		handleSubmit();
	}, [selectedOption, handleSubmit]);

	return {
		selectedOption,
		handleChange,
	};
};
