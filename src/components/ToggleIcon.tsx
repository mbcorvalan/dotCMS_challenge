import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar, closeSidebar } from '../redux/reducers/sideBarReducer';
import { useDebounce } from 'use-debounce';
import { IoMenuOutline } from "react-icons/io5";

const ToggleIcon = () => {
    const dispatch = useDispatch();

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 768) {
            dispatch(closeSidebar());
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
            <IoMenuOutline size={25} />
        </button>
    );
};

export default ToggleIcon;
