import styles from './Paginate.module.scss';
import ReactPaginate from 'react-paginate';


export const Paginate = ({ handlePageClick, pageCount }) => {

	return (
		<>
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
