import { Suspense, useState } from 'react';
import { Breadcrumps, Container, Search, Title } from '../../components'
import styles from './News.module.scss';
import axios from 'axios';
import { TNewsProps } from '../../types';
import { Await, defer, useLoaderData, useNavigation } from 'react-router-dom';
import { NewsCards } from '../../components';


const News = ({ itemsPerPage }: TNewsProps) => {
	const { news, query } = useLoaderData();
	const navigation = useNavigation();
	const [searchValue, setSearchValue] = useState(query || '');

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
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						submitting={navigation.state}
						className={styles.input}
						placeholder='Поиск по новостям'
					/>
				</div>
				<Suspense fallback={<p className='loading'>погодь</p>}>
					<Await resolve={news}>
						{navigation.state === 'loading' ? <p className='loading'>погодь</p> : <NewsCards itemsPerPage={itemsPerPage} />}
					</Await>
				</Suspense>

			</Container>
		</section>
	)
}


const loadNews = async (param) => {
	const search = param ? `?${param}` : ""
	const res = await axios.get(`http://localhost:3000/news/${search}`);
	return res.data;
}

export const newsLoader = async ({ request, params }) => {
	let url = new URL(request.url);
	let query = url.searchParams.toString();

	return defer({ news: loadNews(query), query: url.searchParams.get('q') });
}

export default News