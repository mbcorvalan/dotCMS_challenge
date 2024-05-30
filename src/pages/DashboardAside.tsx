import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useFilterData } from '../hooks/useFilterData';
import { useFetch } from '../hooks/useFetch';
import { usePagination } from '../hooks/usePagination';
import { useSidebarState } from '../hooks/useSidebarState';
import { useNavigation } from '../hooks/useNavigation';
import NewsList from '../components/NewsList';
import SelectOption from '../components/SelectOption';
import PaginationControls from '../components/PaginationControls';
import CreateButton from '../components/CreateButton';

const DashboardAside: React.FC = () => {
    const { selectedOption, handleChange } = useFilterData();
    const allNewsCount = useSelector((state: RootState) => state.newsCount.data.length);
    const selectedNews = useSelector((state: RootState) => state.selectedNews.id);
    const { nextPage, prevPage, currentPage, totalPagesCount, offset } = usePagination(selectedOption, allNewsCount);
    const { handleSubmit } = useFetch(selectedOption, offset, selectedNews);
    const { isOpen, asideClass } = useSidebarState();

    useEffect(() => {
        handleSubmit();
    }, [selectedOption, offset, selectedNews, handleSubmit]);

    useNavigation();

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
                    <CreateButton />
                </>
            )}
        </aside>
    );
};

export default memo(DashboardAside);
