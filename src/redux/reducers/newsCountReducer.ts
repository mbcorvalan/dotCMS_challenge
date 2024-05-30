import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCountBlogs } from '../../service/blogService';
import { ApiResponse, GetBlogs } from '../../types/interfaces';
import { initialState } from '../../config/constants';

/**
 * Thunk for fetching the count of blogs.
 * @param {GetBlogsParams} params - The parameters for fetching the count of blogs.
 * @returns {Promise<ApiResponse>} The response containing the count of blogs.
 */
export const fetchCountNews = createAsyncThunk<ApiResponse, GetBlogs>(
	'news/fetchCountNews',
	async (paramsCount: GetBlogs) => {
		return await getCountBlogs(paramsCount);
	}
);

const newsCountSlice = createSlice({
	name: 'newsCount',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountNews.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchCountNews.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.data = action.payload.contentlets;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchCountNews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to fetch news count';
			});
	},
});

export default newsCountSlice.reducer;
