import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export const useSidebarState = () => {
	const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
	const asideClass = isOpen
		? 'dashboard__aside dashboard__aside--open'
		: 'dashboard__aside dashboard__aside--close';

	return { isOpen, asideClass };
};
