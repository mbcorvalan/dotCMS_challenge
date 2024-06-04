import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSelectedNews } from '../redux/reducers/fetchSelectedNews';
import { AppDispatch } from '../redux/store/store';

export const useFetchSingleNews = (singleItem: string = '') => {
	const dispatch: AppDispatch = useDispatch();

	const handleSingleSubmit = useCallback(async () => {
		try {
			await dispatch(fetchSelectedNews({ id: singleItem }));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}, [singleItem, dispatch]);

	return {
		handleSingleSubmit,
	};
};
