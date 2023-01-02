import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components';
import { News, Error, Post, singlePostLoader } from './pages';

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route path='/' element={<h1>lol</h1>} />
		<Route path='/news' element={<News itemsPerPage={9} />} />
		<Route
			path='/news/:postId'
			element={<Post />}
			loader={singlePostLoader}
			errorElement={<Error />}
		/>
		<Route path='/:smth' element={<Error />} />
	</Route>
))