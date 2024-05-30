import { createSlice } from '@reduxjs/toolkit';
import { SidebarState } from '../../types/interfaces';

const isMobileScreen = window.innerWidth < 768;

const initialState: SidebarState = {
	isOpen: !isMobileScreen,
};

console.log(isMobileScreen);
const sideBarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		/**
		 * Toggle the sidebar open state.
		 * @param {SidebarState} state - The current state of the sidebar.
		 */
		toggleSidebar: (state: SidebarState) => {
			state.isOpen = !state.isOpen;
		},
		/**
		 * Close the sidebar.
		 * @param {SidebarState} state - The current state of the sidebar.
		 */
		closeSidebar: (state: SidebarState) => {
			state.isOpen = false;
		},
	},
});

export const { toggleSidebar, closeSidebar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
