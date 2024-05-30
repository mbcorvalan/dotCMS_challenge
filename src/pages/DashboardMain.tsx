import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import NavBar from '../components/NavBar';
import axios from 'axios';

interface NewsDetail {
    id: number;
    title: string;
    content: string;
}

const DashboardMain: React.FC = () => {
    const { newsId } = useParams<{ newsId: string; }>();
    const [newsDetail, setNewsDetail] = useState<NewsDetail | null>(null);


    const isOpen = useSelector((state: RootState) => state.sideBar.isOpen);
    const mainClass = isOpen ? 'dashboard__main dashboard__main--open' : 'dashboard__main dashboard__main--close';
    ;
    useEffect(() => {
        if (newsId) {
            axios.get(`https://demo.dotcms.com/api/content/id/${newsId}`)
                .then(response => setNewsDetail(response.data))
                .catch(error => console.error('Error fetching news detail:', error));
        }
    }, [newsId]);

    if (!newsDetail) {
        return <div>Loading...</div>;
    }

    return (
        <main className={mainClass}>
            <NavBar />
        </main>
    );
};

export default DashboardMain;

