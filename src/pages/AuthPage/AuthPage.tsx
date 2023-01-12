import { Outlet } from 'react-router-dom'
import styles from './AuthPage.module.scss'

export const AuthPage = () => {
	return (
		<main className="main" id="main">
			<section className={`bg-with-map ${styles.auth}`}>
				<div className={styles.container}>
					<Outlet />
				</div>
			</section>
		</main>
	)
}
