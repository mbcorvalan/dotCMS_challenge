import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainNotice from '../pages/MainNotice';
import NotFound from '../pages/NotFound';
import DashboardAside from '../pages/DashboardAside';


/**
 * Application router component that defines the route structure.
 * @returns {JSX.Element} The router component.
 */
export default function AppRouter(): JSX.Element {
	return (
		<BrowserRouter>
			<DashboardAside />
			<Routes>
				<Route path='/news/:newsId' element={<MainNotice />} />
				<Route path='' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
