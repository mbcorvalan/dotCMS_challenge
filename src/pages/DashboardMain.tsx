import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useMainState } from '../hooks/useMainState';
import { useFetchSingleNews } from '../hooks/useFetchSingleNews';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import NewsItem from '../components/NewsItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import NotificationMsg from '../components/NotificationMsg';
import CreateNewsForm from '../components/CreateNewsForm';

const DashboardMain: React.FC = () => {
    const { mainClass, isOpen } = useMainState();
    const { newsId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const newsSelectedStatus = useSelector((state: RootState) => state.selectedNews.isLoading);
    const firsItemList = useSelector((state: RootState) => state.news.data[0]?.identifier);
    const isCreateNews = location.pathname.includes('/create-news');
    const { handleSingleSubmit } = useFetchSingleNews(newsId || firsItemList);

    useEffect(() => {
        handleSingleSubmit();
    }, [newsId, firsItemList, handleSingleSubmit, navigate]);

    return (
        <main className={mainClass}>
            <NavBar />
            <div className={`main__container ${isOpen ? 'hidden' : ''}`}>
                <div className="main__content">
                    {isCreateNews ? (
                        <CreateNewsForm />
                    ) : newsSelectedStatus ? (
                        <Loading status={newsSelectedStatus} color="#c336e5" container="li" />
                    ) : newsId || firsItemList ? (
                        <NewsItem />
                    ) : (
                        <NotificationMsg msg="No news found" container="div" type="failed" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default DashboardMain;
