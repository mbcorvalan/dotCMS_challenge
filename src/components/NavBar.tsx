import React from 'react';
import ToggleIcon from './ToggleIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

/**
 * NavBar component that contains navigation controls and user information.
 * It displays a toggle button and the user's name, adjusting visibility based on the sidebar state.
 * 
 * @returns A navigation bar with dynamic class assignments based on the Redux state.
 */
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
