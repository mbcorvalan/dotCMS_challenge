import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postNewNews } from '../../service/blogService';
import { PostNewsState, PostNewsParams } from '../../types/interfaces';

const initialState: PostNewsState = {
	status: 'idle',
	error: null,
};

/**
 * Thunk for posting news.
 * @param {PostNewsParams} newsData - The parameters for posting the news.
 * @returns {Promise<number>} The status of the response.
 */
export const postNews = createAsyncThunk(
	'postNews',
	async (newsData: PostNewsParams): Promise<number> => {
		return await postNewNews(newsData);
	}
);

// Slice
const postNewsSlice = createSlice({
	name: 'postNews',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(postNews.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(postNews.fulfilled, (state, action: PayloadAction<number>) => {
				state.status = action.payload === 200 ? 'succeeded' : 'failed';
			})
			.addCase(postNews.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to create news';
			});
	},
});

export default postNewsSlice.reducer;
