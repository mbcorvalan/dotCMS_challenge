import axios from 'axios';
import { BASE_URL, LANGUAGE_ID, DATE_RANGES } from '../config/constants';
import { GetBlogsParams, ApiResponse } from '../types/interfaces';

/**
 * Fetch blogs based on the provided parameters.
 * @param {GetBlogsParams} params - The parameters for fetching blogs.
 * @returns {Promise<ApiResponse>} The response containing the blogs data.
 */
export const getBlogs = async ({ year, limit, offset }: GetBlogsParams): Promise<ApiResponse> => {

    const sysPublishDate = DATE_RANGES[year] || '';

    const url = sysPublishDate
        ? `${BASE_URL}/+contentType:Blog%20+Blog.postingDate:${sysPublishDate}%20+languageId:${LANGUAGE_ID}/depth/0/limit/${limit}/offset/${offset}`
        : `${BASE_URL}/+contentType:Blog%20+languageId:${LANGUAGE_ID}/depth/0/limit/${limit}/offset/${offset}`;

    try {
        const response = await axios.get<ApiResponse>(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch blogs');
    }
};
