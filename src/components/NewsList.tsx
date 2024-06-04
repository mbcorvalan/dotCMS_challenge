import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import Loading from './Loading';
import NotificationMsg from './NotificationMsg';
import NewsListItem from './NewsListItem';
/**
 * NewsList component renders a list of news items fetched from the Redux store.
 * It handles different states of fetching including loading, error, and empty states.
 * 
 * @returns React Element containing the list of news items or messages based on the state.
 */
const NewsList: React.FC = () => {
    const news = useSelector((state: RootState) => state.news.data);
    const newsStatus = useSelector((state: RootState) => state.news.isLoading);
    const newsError = useSelector((state: RootState) => state.news.error);

    if (newsStatus) return <Loading status={newsStatus} color="#c336e5" container="li" />;
    if (newsError) return <NotificationMsg msg={newsError} container="li" type="failed" />;
    if (!news.length) return <NotificationMsg msg="No news available" container="li" type="failed" />;

    return (
        <>
            {news.map((item) => (
                <NewsListItem key={item.identifier} news={item} />
            ))}
        </>
    );
};

export default NewsList;