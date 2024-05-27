import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Dashboard from '../pages/dashboard';

export default function AppRouter() {
	return (
		<>
			<NavBar />
			<Routes>
				{/* Public routes */}
				<Route path='/' element={<Dashboard />} />
			</Routes>
		</>
	);
}
