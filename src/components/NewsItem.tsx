import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { formatDate } from '../config/constants';
import { NewsData } from '../types/interfaces';

/**
 * NewsItem component displays detailed information about a specific news item.
 * It includes a breadcrumb with the posting date, the title, an image, and a description of the news.
 *
 * @returns A React component that displays a single news item.
 */
export default function NewsItem() {
    const singleNews = useSelector((state: RootState) => state.selectedNews.data[0] as NewsData | undefined);

    return (
        <div className="news-item__content">
            <div className='news-item__breadcrumb'>
                <span>{singleNews?.postingDate ? singleNews?.postingDate : formatDate(new Date())}</span>
                <div className="news-item__breadcrumb-divider"></div>
            </div>
            <h1 className='news-item__title'>{singleNews?.title}</h1>
            <img
                loading="lazy"
                className="news-item__image"
                src={`https://demo.dotcms.com/dA/${singleNews?.inode}/12000w/1920h`}
                alt={singleNews?.title || 'News image'}
            />
            <h2 className='news-item__description'>{singleNews?.ogDescription}</h2>
        </div>
    );
}
