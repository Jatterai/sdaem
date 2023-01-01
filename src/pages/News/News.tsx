import React, { useEffect, useState } from 'react';
import Breadcrumps from '../../components/Breadcrumps/Breadcrumps';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import styles from './News.module.scss';
import axios from 'axios';
import { TCard, TNewsProps } from '../../types';
import ReactPaginate from 'react-paginate';
import { useSearch } from '../../hooks/useSearch';




const News = ({ itemsPerPage }: TNewsProps) => {
	const [news, setNews] = useState([false]);
	const [itemOffset, setItemOffset] = useState(0);

	const {
		handleSubmit,
		handleChange,
		searchInputValue,
		query,
		searchParams
	} = useSearch();

	const endOffset = itemOffset + itemsPerPage;

	const currentItems = news.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(news.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % news.length;
		setItemOffset(newOffset);
		window.scrollTo(0, 0)
	};

	useEffect(() => {
		setNews([false]);
		const searchLine = query ? `?${searchParams.toString()}` : '';
		axios.get(`http://localhost:3000/news${searchLine}`)
			.then(({ data }) => { setNews(data) })
	}, [query])

	const newsElements = currentItems.map((el: TCard) => (<Card key={el.id} {...el} />));
	return (
		<section className={styles.news}>
			<Container className={styles.container}>
				<Breadcrumps
					className={styles.bread}
					links={[
						{ name: 'Новости', link: '/', current: true }
					]}
				/>
				<div className={styles['title__wrapper']}>
					<Title addClass={styles.title}>Новости</Title>
					<Search
						className={styles.input}
						placeholder='Поиск по новостям'
						handleSubmit={handleSubmit}
						searchInputValue={searchInputValue}
						handleChange={handleChange}
					/>
				</div>
				{!news.length ?
					<p className={styles.notFound}>Такого нету</p> :
					!news[0] ?
						<p className='loading'>зогружаю</p> :
						<div className={styles.cards}>
							{newsElements}
						</div>
				}
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
			</Container>
		</section>
	)
}

export default News