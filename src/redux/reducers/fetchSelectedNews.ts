import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSelectedBlogs } from '../../service/blogService';
import { ApiResponse, SelectedNews } from '../../types/interfaces';
import { selectedNewsInitialState } from '../../config/constants';

/**
 * Thunk for fetching news data.
 * @param {SelectedNews} params - The parameters for fetching news.
 * @returns {Promise<ApiResponse>} The response containing the news data.
 */
export const fetchSelectedNews = createAsyncThunk<ApiResponse, SelectedNews>(
	'news/fetchSelectedNews',
	async (params: SelectedNews) => {
		return await getSelectedBlogs(params);
	}
);

const selectedNewsSlice = createSlice({
	name: 'selectedNews',
	initialState: { ...selectedNewsInitialState, id: '' },
	reducers: {
		setSelectedNewsId: (state, action: PayloadAction<string>) => {
			state.id = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSelectedNews.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchSelectedNews.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.data = [action.payload.contentlets[0]];
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchSelectedNews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to fetch news';
			});
	},
});

export const { setSelectedNewsId } = selectedNewsSlice.actions;

export default selectedNewsSlice.reducer;
