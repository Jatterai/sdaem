import React from 'react';
import { Header, Footer } from '../'
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main className="main" id="main">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout