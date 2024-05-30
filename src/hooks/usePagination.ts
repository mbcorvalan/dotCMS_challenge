import { useState, useEffect } from 'react';

export const usePagination = (
	selectedOption: string,
	totalCount: number = 0
) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize: number = 5;
	const totalPagesCount = Math.ceil(totalCount / pageSize);
	const offset = (currentPage - 1) * pageSize;

	useEffect(() => {
		if (totalPagesCount === 0) {
			setCurrentPage(0);
		} else {
			setCurrentPage(1);
		}
	}, [selectedOption, totalPagesCount]);

	const nextPage = () =>
		setCurrentPage((prev) => Math.min(prev + 1, totalPagesCount));
	const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

	return {
		totalPagesCount,
		currentPage,
		offset,
		nextPage,
		prevPage,
	};
};
