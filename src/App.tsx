import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.scss';
import { Layout } from './components';
import { News, Error, Post, singlePostLoader } from './pages';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route path='/' element={<h1>lol</h1>} />
		<Route path='/news' element={<News itemsPerPage={9} />} />
		<Route path='/news/:postId' element={<Post />} loader={singlePostLoader} />
		<Route path='/:smth' element={<Error />} />
	</Route>
))

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
