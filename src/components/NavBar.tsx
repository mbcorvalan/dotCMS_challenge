import ToggleIcon from './ToggleIcon';
import React, { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';


export default function NavBar() {
    const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
    return (
        <nav className="nav__container">
            <div className="nav__left">
                <div className="toggle-sidebar__container">
                    <ToggleIcon />
                </div>
            </div>
            <div className={`nav__right ${isOpen ? 'hidden' : ''}`}>
                <div className='user__container'>
                    <h6 className='user__name'>John Doe</h6>
                </div>
            </div>
        </nav>
    );
}
