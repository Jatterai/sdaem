import { useState } from "react";

export const usePaginate = (database: object[], itemsPerPage: number) => {
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = database.slice(itemOffset, endOffset);
	const handlePageClick = (event: React.MouseEvent) => {
		const newOffset = (event.selected * itemsPerPage) % database.length;
		setItemOffset(newOffset);
		window.scrollTo(0, 0);
	};

	const pageCount = Math.ceil(database.length / itemsPerPage);

	return { currentItems, pageCount, handlePageClick }
}