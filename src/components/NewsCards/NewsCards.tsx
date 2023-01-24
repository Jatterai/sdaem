import styles from './NewsCards.module.scss';
import { TCard } from '../../types';
import { useAsyncValue } from 'react-router-dom';
import { usePaginate } from '../../hooks/usePaginate';
import { Card, Paginate } from '../index';

export const NewsCards = ({ itemsPerPage }) => {
	const news = useAsyncValue();
	const { currentItems, handlePageClick, pageCount } = usePaginate(news, itemsPerPage);

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
			<Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
		</>
	)
}
