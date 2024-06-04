import React from 'react';
import { Contentlet } from '../types/interfaces';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSelectedNews } from '../redux/reducers/fetchSelectedNews';
import { AppDispatch } from '../redux/store/store';
import { formatDateNoTime } from '../config/constants';

/**
 * Extracts the date from a date-time string by splitting the string and returning the first part.
 * @param {string} dateTimeString The date-time string to process.
 * @returns {string} The date part of the string.
 */
export function extractDate(dateTimeString: string): string {
    return dateTimeString.split(' ')[0];
}

/**
 * Component for displaying a single news item in a list.
 * Handles navigation and fetching detailed news data when clicked.
 * 
 * @param {Contentlet} props.news The news item data.
 * @returns {React.ReactElement} A list item containing the news information.
 */
const NewsListItem: React.FC<{ news: Contentlet; }> = ({ news }) => {
    const dateOnly = news.postingDate ? extractDate(news.postingDate) : formatDateNoTime(new Date());

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(fetchSelectedNews({ id: news.identifier }));
        navigate(`/news/${news.identifier}`);
    };

    return (
        <li className="news-list-item" key={news.postingDate}>
            <button className="btn btn--item-list" onClick={handleClick}>
                <div className="news-list-item__image-container">
                    <img loading="lazy" className="news-list-item__image" src={`https://demo.dotcms.com/dA/${news.inode}/40w/40h`} alt={news.pageTitle || news.ogTitle} />
                </div>
                <div className="news-list-item__info-container">
                    <h3 className="news-list-item__info-title">{news.title}</h3>
                    <p className="news-list-item__info-date-post">Date post {dateOnly}</p>
                </div>
            </button>
        </li>
    );
};

export default NewsListItem;
