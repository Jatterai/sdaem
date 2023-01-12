import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Authorization, Layout } from './components';
import { News, Error, Post, singlePostLoader, Contacts, newsLoader, AuthPage } from './pages';

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
			<Route path='contacts' element={<Contacts />} />
			<Route path=':smth' element={<Error />} />
		</Route>
		<Route path='/log/' element={<AuthPage />}>
			<Route path='auth' element={<Authorization />} />
			<Route path='reg' element={<h1>Регистрация</h1>} />
		</Route>
	</>
))