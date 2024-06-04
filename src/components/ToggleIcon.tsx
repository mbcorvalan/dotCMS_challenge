import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar, closeSidebar } from '../redux/reducers/sideBarReducer';
import { useDebounce } from 'use-debounce';
import { IoMenuOutline } from "react-icons/io5";

/**
 * ToggleIcon component provides a button to toggle the sidebar.
 * It automatically closes the sidebar when the window is resized to a width of 768 pixels or less,
 * debouncing the resize event handler to improve performance.
 * 
 * @returns {React.ReactElement} A button element with an icon that toggles the sidebar state.
 */
const ToggleIcon: React.FC = () => {
    const dispatch = useDispatch();

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            dispatch(closeSidebar());
        }
    }, [dispatch]);

    const [debouncedHandleResize] = useDebounce(handleResize, 300);

    useEffect(() => {
        handleResize(); // Call once on mount to ensure correct sidebar state

        window.addEventListener('resize', debouncedHandleResize);
        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, [debouncedHandleResize, handleResize]);

    const handleSetSidebar = () => {
        dispatch(toggleSidebar());
    };

    return (
        <button className='btn' onClick={handleSetSidebar}>
            <IoMenuOutline size={25} />
        </button>
    );
};

export default ToggleIcon;
