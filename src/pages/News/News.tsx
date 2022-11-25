import React, { useEffect, useState } from 'react';
import Breadcrumps from '../../components/Breadcrumps/Breadcrumps';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import styles from './News.module.scss';
import axios from 'axios';
import { TCard } from '../../types';

const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/news')
			.then(({ data }) => setNews(data))
	}, [])

	const newsElements = news.map((el: TCard) => (
		<Card
			key={el.id}
			title={el.title}
			img={el.img}
			text={el.text}
			date={el.date}
		/>
	))
	return (
		<section className={styles.news}>
			<Container className={styles.container}>
				<Breadcrumps className={styles.bread} />
				<div className={styles['title__wrapper']}>
					<Title addClass={styles.title}>Новости</Title>
					<Search className={styles.input} placeholder='Поиск по новостям' />
				</div>
				<div className={styles.cards}>
					{newsElements}
				</div>
			</Container>
		</section>
	)
}

export default News