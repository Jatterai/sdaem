import React from 'react';
import Breadcrumps from '../../components/Breadcrumps/Breadcrumps';
import Container from '../../components/Container/Container';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import styles from './News.module.scss';

const News = () => {
	return (
		<section className={styles.news}>
			<Container className={styles.container}>
				<Breadcrumps className={styles.bread} />
				<div className={styles['title__wrapper']}>
					<Title addClass={styles.title}>Новости</Title>
					<Search className={styles.input} placeholder='Поиск по новостям' />
				</div>
			</Container>
		</section>
	)
}

export default News