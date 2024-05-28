import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBlogs } from '../../service/blogService';
import { GetBlogsParams, NewsState, ApiResponse } from '../../types/interfaces';

/**
 * Thunk for fetching news data.
 * @param {GetBlogsParams} params - The parameters for fetching news.
 * @returns {Promise<ApiResponse>} The response containing the news data.
 */
export const fetchNews = createAsyncThunk<ApiResponse, GetBlogsParams>(
	'news/fetchNews',
	async (params: GetBlogsParams) => {
		return await getBlogs(params);
	}
);

const initialState: NewsState = {
	data: [],
	isLoading: false,
	error: null,
};

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchNews.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.data = action.payload.contentlets;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchNews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to fetch news';
			});
	},
});

export default newsSlice.reducer;
