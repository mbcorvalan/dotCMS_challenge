import NavBar from "./NavBar";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export default function DashboardMain() {
    const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
    const mainClass = isOpen ? 'dashboard__main dashboard__main--close' : 'dashboard__main dashboard__main--open';

    return (
        <main className={mainClass}>
            <NavBar />
        </main>
    );
}
