import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store/store';

export const useNavigation = () => {
	const navigate = useNavigate();
	const newsState = useSelector((state: RootState) => state.selectedNews.data);

	useEffect(() => {
		if (newsState[0]?.identifier) {
			navigate(`/news/${newsState[0].identifier}`);
		} else {
			navigate(`/`);
		}
	}, [newsState, navigate]);
};
