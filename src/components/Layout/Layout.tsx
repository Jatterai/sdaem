import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main className="main" id="main">
				<Outlet />
			</main>
			<footer className="footer">footer</footer>
		</div>
	)
}

export default Layout