import React, { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import Loading from './Loading';
import ErrorMsg from './ErrorMsg';
import NewsItem from './NewsItem';

const NewsList = () => {
    const news = useSelector((state: RootState) => state.news.data);
    const newsStatus = useSelector((state: RootState) => state.news.isLoading);
    const newsError = useSelector((state: RootState) => state.news.error);

    if (newsStatus) return <Loading status={newsStatus} color="#c336e5" container="li" />;
    if (newsError) return <ErrorMsg msg={newsError} container="li" />;
    if (!news.length) return <ErrorMsg msg="No news available" container="li" />;
    return (
        <>
            {news.map((item) => (
                <NewsItem key={item.identifier} news={item} />
            ))}
        </>
    );
};

export default NewsList;
