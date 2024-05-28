import { createSlice } from '@reduxjs/toolkit';
import { SidebarState } from '../../types/interfaces';

const initialState: SidebarState = {
	isOpen: false,
};

const sideBarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		/**
		 * Toggle the sidebar open state.
		 * @param {SidebarState} state - The current state of the sidebar.
		 */
		toggleSidebar: (state) => {
			state.isOpen = !state.isOpen;
		},
		/**
		 * Close the sidebar.
		 * @param {SidebarState} state - The current state of the sidebar.
		 */
		closeSidebar: (state) => {
			state.isOpen = false;
		},
	},
});

export const { toggleSidebar, closeSidebar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
