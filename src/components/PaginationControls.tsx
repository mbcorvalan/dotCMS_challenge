import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PaginationControlsProps {
    currentPage: number;
    totalPagesCount: number;
    prevPage: () => void;
    nextPage: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPagesCount, prevPage, nextPage }) => {
    return (
        <div className='pagination-controls__container'>
            <button
                className='btn btn-primary'
                onClick={prevPage}
                disabled={currentPage <= 1}
            >
                <IoIosArrowBack />
            </button>
            <span className='pagination-controls__text'>
                Page {currentPage} of {totalPagesCount}
            </span>
            <button
                className='btn btn-primary'
                onClick={nextPage}
                disabled={currentPage >= totalPagesCount}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default PaginationControls;
