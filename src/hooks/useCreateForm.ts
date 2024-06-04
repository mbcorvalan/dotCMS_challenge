import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { postNews } from '../redux/reducers/postNewsReducer';
import { AppDispatch } from '../redux/store/store';
import { FormData } from '../types/interfaces';

export const useCreateForm = (formState: FormData) => {
	const dispatch: AppDispatch = useDispatch();

	const handleSubmit = useCallback(async () => {
		try {
			dispatch(
				postNews({
					title: formState.title,
					publishDate: formState.publishDate,
					postingDate: formState.postingDate,
					body: formState.body,
					categories: formState.categories,
					tags: formState.tags,
					contentType: formState.contentType,
					urlTitle: formState.urlTitle,
					contentHost: formState.contentHost,
				})
			);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}, [dispatch, formState]);

	return {
		handleSubmit,
	};
};
