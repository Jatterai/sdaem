import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Authorization, Layout, Registration } from './components';
import { News, Error, Post, singlePostLoader, Contacts, newsLoader, AuthPage, CatalogPage } from './pages';

export const router = createBrowserRouter(createRoutesFromElements(
	<>
		<Route path='/' element={<Layout />}>
			<Route path='' element={<h1>lol</h1>} />
			<Route path='news'
				element={<News itemsPerPage={9} />}
				loader={newsLoader}
				errorElement={<h2 className='loading'>ОшИбКа СеРвЕрА</h2>}
			/>
			<Route
				path='news/:postId'
				element={<Post />}
				loader={singlePostLoader}
				errorElement={<Error />}
			/>
			<Route path='catalog' element={<CatalogPage />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path=':smth' element={<Error />} />
		</Route>
		<Route path='/log/' element={<AuthPage />}>
			<Route path='auth' element={<Authorization />} />
			<Route path='reg' element={<Registration />} />
		</Route>
	</>
))