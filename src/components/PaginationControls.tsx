import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PaginationControlsProps } from '../types/interfaces';

/**
 * PaginationControls component provides UI for navigating through paginated data.
 * It displays buttons to navigate to the previous and next pages and shows the current page number.
 * Buttons are disabled appropriately based on the current page and the total number of pages.
 * 
 * @param {PaginationControlsProps} props - The properties passed to the component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPagesCount - The total number of pages available.
 * @param {Function} props.prevPage - Function to call when the previous page button is clicked.
 * @param {Function} props.nextPage - Function to call when the next page button is clicked.
 * @returns {React.ReactElement} The pagination control UI elements.
 */
const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPagesCount, prevPage, nextPage }) => {
    return (
        <div className='pagination-controls__container'>
            <button
                className='btn btn-secondary'
                onClick={prevPage}
                disabled={currentPage <= 1}
            >
                <IoIosArrowBack />
            </button>
            <span className='pagination-controls__text'>
                Page {currentPage} of {totalPagesCount}
            </span>
            <button
                className='btn btn-secondary'
                onClick={nextPage}
                disabled={currentPage >= totalPagesCount}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default PaginationControls;

