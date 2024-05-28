import { Contentlet } from '../types/interfaces';

function extractDate(dateTimeString: string) {
    return dateTimeString.split(' ')[0];
}

const NewsItem: React.FC<{ news: Contentlet; }> = ({ news }) => {
    const dateOnly = extractDate(news.postingDate);
    return (
        <li className="news-item" key={news.postingDate}>
            <div className="news-item__image-container">
                <img className="news-item__image" src={`https://demo.dotcms.com/dA/${news.inode}/35w/35h`} alt={news.pageTitle || news.ogTitle} />
            </div>
            <div className="news-item__info-container">
                <h3 className="news-item__info-title">{news.pageTitle || news.ogTitle}</h3>
                <p className="news-item__info-description">Date post {dateOnly}</p>
            </div>
        </li>
    );
};

export default NewsItem;