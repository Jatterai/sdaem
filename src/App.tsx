import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './router.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogItems } from './app/features/catalog/catalogSlice';


function App() {

	console.log('%cЯ звёздочку в Каталоге Квартир сама нарисовала с:', 'color: hotpink; font-weight: 700; font-size: 40px; text-shadow: -1px -1px 0px black')

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCatalogItems());
	}, [])
	return (
		<RouterProvider router={router} />
	)
}

export default App
