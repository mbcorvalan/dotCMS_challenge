import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useFilterData } from '../hooks/useFilterData';
import { useFetch } from '../hooks/useFetch';
import { usePagination } from '../hooks/usePagination';
import NewsList from './NewsList';
import SelectOption from './SelectOption';
import PaginationControls from './PaginationControls';

const DashboardAside = () => {
    const { selectedOption, handleChange } = useFilterData();
    const allNewsCount = useSelector((state: RootState) => state.newsCount.data.length);
    const { nextPage, prevPage, currentPage, totalPagesCount, offset } = usePagination(selectedOption, allNewsCount);
    const { handleSubmit } = useFetch(selectedOption, offset);

    useEffect(() => {
        handleSubmit();
    }, [selectedOption, offset, handleSubmit]);

    const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);

    const asideClass = isOpen ? 'dashboard__aside dashboard__aside--open' : 'dashboard__aside dashboard__aside--close';

    return (
        <aside className={asideClass}>
            <a className="brand__container" href="/">
                <img src={isOpen ? "/dotcms-black.png" : "/dotcms-mobile.webp"} alt="logo" />
            </a>
            {isOpen && (
                <>
                    <ul className="side-menu__container">
                        <li className="side-menu__divider">News</li>
                        <SelectOption selectedOption={selectedOption} handleChange={handleChange} />
                        <NewsList />
                    </ul>
                    <PaginationControls
                        currentPage={currentPage}
                        totalPagesCount={totalPagesCount}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                </>
            )}
        </aside>
    );
};

export default memo(DashboardAside);
