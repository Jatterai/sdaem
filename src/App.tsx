import { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.scss'
import { Header } from './components';
import Layout from './components/Layout/Layout';
import News from './pages/News/News';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/news' element={<News />} />
				<Route path='/:smth' element={<p>im not existing yet</p>} />
			</Route>
		</Routes>
	)
}

export default App
