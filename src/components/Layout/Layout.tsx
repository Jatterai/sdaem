import { Header, Footer } from '../'
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
