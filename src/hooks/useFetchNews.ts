import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../redux/reducers/fetchNewsReducer';
import { fetchCountNews } from '../redux/reducers/newsCountReducer';
import { AppDispatch } from '../redux/store/store';
import { LIMIT_PER_PAGE } from '../config/constants';

export const useFetchNews = (
	selectedOption: string = '',
	offset: number = 0
) => {
	const dispatch: AppDispatch = useDispatch();

	const handleSubmit = useCallback(async () => {
		try {
			await Promise.all([
				dispatch(fetchCountNews({ year: selectedOption })),
				dispatch(
					fetchNews({ year: selectedOption, limit: LIMIT_PER_PAGE, offset })
				),
			]);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}, [dispatch, selectedOption, offset]);

	return {
		handleSubmit,
	};
};
