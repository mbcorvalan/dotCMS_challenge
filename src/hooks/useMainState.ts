import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export const useMainState = () => {
	const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
	const mainClass = isOpen
		? 'dashboard__main dashboard__main--open'
		: 'dashboard__main dashboard__main--close';

	return { isOpen, mainClass };
};
