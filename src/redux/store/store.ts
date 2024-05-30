import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../reducers/sideBarReducer';
import newsSlice from '../reducers/fetchNewsReducer';
import newsCountSlice from '../reducers/newsCountReducer';
import selectedNewsSlice from '../reducers/fetchSelectedNews';

const store = configureStore({
	reducer: {
		sideBar: sideBarSlice,
		news: newsSlice,
		newsCount: newsCountSlice,
		selectedNews: selectedNewsSlice,
	},
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
