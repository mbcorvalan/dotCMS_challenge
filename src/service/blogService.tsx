import axios from 'axios';
import { BASE_URL, LANGUAGE_ID, DATE_RANGES } from '../config/constants';
import { GetBlogsParams, ApiResponse, GetBlogs, SelectedNews, PostNewsParams } from '../types/interfaces';

/**
 * Fetch blogs based on the provided parameters.
 * @param {GetBlogsParams} params - The parameters for fetching blogs.
 * @returns {Promise<ApiResponse>} The response containing the blogs data.
 */
export const getBlogs = async ({ year, limit, offset }: GetBlogsParams): Promise<ApiResponse> => {
    const sysPublishDate = DATE_RANGES[year] || '';

    const url = sysPublishDate
        ? `${BASE_URL}/query/+contentType:Blog%20+Blog.postingDate:${sysPublishDate}%20+languageId:${LANGUAGE_ID}/depth/0/limit/${limit}/offset/${offset}`
        : `${BASE_URL}/query/+contentType:Blog%20+languageId:${LANGUAGE_ID}/depth/0/limit/${limit}/offset/${offset}`;

    try {
        const response = await axios.get<ApiResponse>(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogs');
    }
};

/**
 * Fetch the total number of blogs.
 * @param {GetBlogs} paramsCount - The parameters for fetching news.
 * @returns {Promise<ApiResponse>} The response containing the total number of blogs.
 */
export const getCountBlogs = async ({ year }: GetBlogs): Promise<ApiResponse> => {
    const sysPublishDate = DATE_RANGES[year] || '';

    const url = sysPublishDate
        ? `${BASE_URL}/query/+contentType:Blog%20+Blog.postingDate:${sysPublishDate}%20+languageId:${LANGUAGE_ID}/depth/0`
        : `${BASE_URL}/query/+contentType:Blog%20+languageId:${LANGUAGE_ID}/depth/0`;

    try {
        const response = await axios.get<ApiResponse>(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogs');
    }
};


export const getSelectedBlogs = async ({ id }: SelectedNews): Promise<ApiResponse> => {
    const url = `${BASE_URL}/id/${id}`;
    try {
        const response = await axios.get<ApiResponse>(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogs');
    }
};



export const postNewNews = async (newsData: PostNewsParams): Promise<number> => {
    const url = `${BASE_URL}/publish/1`;
    try {
        const response = await axios.post(url, newsData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('admin@dotcms.com:admin')
            }
        });
        return response.status;
    } catch (error) {
        throw new Error('Failed to create news');
    }
};