import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from '../reducers/sideBarReducer';
import newsSlice from '../reducers/newsReducer';
import newsCountSlice from '../reducers/newsCountReducer';

const store = configureStore({
	reducer: {
		sideBar: sideBarSlice,
		news: newsSlice,
		newsCount: newsCountSlice,
	},
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
