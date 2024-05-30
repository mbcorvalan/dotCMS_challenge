import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useFilterData } from '../hooks/useFilterData';
import { useFetch } from '../hooks/useFetch';
import { usePagination } from '../hooks/usePagination';
import NewsList from '../components/NewsList';
import SelectOption from '../components/SelectOption';
import PaginationControls from '../components/PaginationControls';
import CreateButton from '../components/CreateButton';
import { useNavigate } from 'react-router-dom';

const DashboardAside = () => {
    const newsId = "2b100ac7-07b1-48c6-8270-dc01ff958c69";
    const navigate = useNavigate();
    const { selectedOption, handleChange } = useFilterData();
    const allNewsCount = useSelector((state: RootState) => state.newsCount.data.length);
    const { nextPage, prevPage, currentPage, totalPagesCount, offset } = usePagination(selectedOption, allNewsCount);
    const { handleSubmit } = useFetch(selectedOption, offset);

    useEffect(() => {
        handleSubmit();
        navigate(`/news/${newsId}`);
    }, [selectedOption, offset, handleSubmit, newsId]);

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
                    <CreateButton />
                </>
            )}
        </aside>
    );
};

export default memo(DashboardAside);
