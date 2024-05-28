import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

/**
 * Application router component that defines the route structure.
 * @returns {JSX.Element} The router component.
 */
export default function AppRouter(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
