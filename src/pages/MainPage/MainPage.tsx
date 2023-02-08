
import { Container, SortingForm } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
	return (
		<div>
			<section className={styles.forms}>
				<Container className={styles.container + ' bg-with-map'}>
					<h2 className={styles.title}>Sdaem.by - у нас живут <span>ваши объявления</span></h2>
				</Container>
			</section>
		</div>
	)
}
