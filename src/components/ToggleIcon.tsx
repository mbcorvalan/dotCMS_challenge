import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar, closeSidebar } from '../redux/reducers/sideBarReducer';
import { useDebounce } from 'use-debounce';


const ToggleIcon = () => {
    const dispatch = useDispatch();

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            dispatch(closeSidebar());
        } else {
            dispatch(toggleSidebar());
        }
    }, [dispatch]);

    const [debouncedHandleResize] = useDebounce(handleResize, 300);

    useEffect(() => {
        handleResize();

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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
            >
                <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default ToggleIcon;
