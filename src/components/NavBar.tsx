import ToggleIcon from './ToggleIcon';

export default function NavBar() {
    return (
        <nav className="nav__container">
            <div className="nav__left">
                <div className="toggle-sidebar__container">
                    <ToggleIcon />
                </div>
            </div>
            <div className="nav__right">
                <div className='user__container'>
                    <h6 className='user__name'>John Doe</h6>
                </div>
            </div>
        </nav>
    );
}
