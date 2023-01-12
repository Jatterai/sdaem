import styles from './NewsCards.module.scss';
import { TCard } from '../../types';
import { useAsyncValue } from 'react-router-dom';
import { useState } from 'react';
import { Card } from '../index';
import ReactPaginate from 'react-paginate';


export const NewsCards = ({ itemsPerPage }) => {
	const news = useAsyncValue();
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = news.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(news.length / itemsPerPage);
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % news.length;
		setItemOffset(newOffset);
		window.scrollTo(0, 0)
	};

	const newsElements = currentItems.map((el: TCard) => (<Card key={el.id} {...el} />));

	if (!news.length) {
		return (
			<p className={styles.notFound}>
				Такого нету
			</p>
		)
	}

	return (
		<>
			<div className={styles.cards}>
				{newsElements}
			</div>
			<ReactPaginate
				className={styles.paginateContainer}
				pageClassName={styles.li}
				pageLinkClassName={styles.link}
				activeClassName={styles['li__active']}
				activeLinkClassName={styles['link__active']}

				breakLabel="..."
				nextLabel=""
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel=""
			/>
		</>
	)
}
