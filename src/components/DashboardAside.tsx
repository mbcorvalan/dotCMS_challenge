import React, { useState } from 'react';
import { options } from '../config/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export default function DashboardAside() {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
    const asideClass = isOpen ? 'dashboard__aside dashboard__aside--close' : 'dashboard__aside dashboard__aside--open';

    return (
        <>
            <aside className={asideClass}>
                <a className="brand__container" href="/">
                    <img src={isOpen ? "/dotcms-mobile.webp" : "/dotcms-black.png"} alt="logo" />
                </a>
                {!isOpen && (
                    <ul className="side-menu__container">
                        <li className="side-menu__divider">News</li>
                        <li>
                            <div className="custom-select__container">
                                <select
                                    className="custom-select"
                                    value={selectedOption}
                                    onChange={handleChange}
                                >
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </li>
                    </ul>
                )}
            </aside>
        </>
    );
}
