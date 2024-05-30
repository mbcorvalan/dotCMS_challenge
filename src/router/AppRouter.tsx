import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DashboardMain from '../pages/DashboardMain';
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
				<Route path='/news/:newsId' element={<DashboardMain />} />
			</Routes>
		</BrowserRouter>
	);
}
