import axios from 'axios';
import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { Container, PostBody, Card } from '../../components';
import { TCard } from '../../types';
import styles from './Post.module.scss';


const Post = () => {
	const { post, postId, morePosts } = useLoaderData();

	return (
		<>
			<section className={styles.post}>
				<Container className={styles.container}>
					<Suspense fallback={<h2 className='loading'>Загрузка</h2>}>
						<Await resolve={post}>
							<PostBody />
						</Await>
					</Suspense>
				</Container>
			</section>
			<section className={styles.more}>
				<Container className={styles.more__container}>
					<h4 className={styles.more__title}>Читайте также</h4>
					<Suspense fallback={<h2 className='loading'>:)</h2>}>
						<Await resolve={morePosts} errorElement={<p>ошибка сорь</p>} children={
							(morePosts) => {
								const cards = morePosts.map(el => (<Card key={el.id} {...el} />))
								return (
									<div className={styles.more__cards}>
										{cards}
									</div>
								)
							}
						} />
					</Suspense>
				</Container>
			</section>
		</>
	)
}

const getPostById = async (postId) => {
	const res = await fetch(`http://localhost:3000/news/${postId}`);
	if (!res.ok) throw new Response('', { status: res.status, statusText: 'Not Found' })
	return res.json();
}

const getMorePosts = async (id) => {
	const res = await axios.get(`http://localhost:3000/news`);

	if (res.status !== 200) throw new Response('', { status: res.status, statusText: 'Not Found' })

	const data = res.data;
	const filtered = data.filter((e: TCard) => e.id != id);
	const randomNum = Math.floor(Math.random() * (filtered.length - 3))
	const randomThree = filtered.slice(randomNum, randomNum + 3);

	return randomThree;
}

export const singlePostLoader = async ({ request, params }) => {
	const postId = params.postId;
	window.scrollTo(0, 0);
	return defer({ morePosts: getMorePosts(postId), post: getPostById(postId), postId })
}

export default Post