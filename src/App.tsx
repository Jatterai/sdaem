import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './router.jsx';


function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
