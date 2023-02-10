import { redirect } from 'react-router-dom';
import { AdvantagesSection, CatalodSection, Container, Tabs } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
	return (
		<div>
			<section className={styles.forms}>
				<Container className={styles.container + ' bg-with-map'}>
					<h2 className={styles.title}>Sdaem.by - у нас живут <span>ваши объявления</span></h2>
					<Tabs />
				</Container>
			</section>
			<CatalodSection />
			<AdvantagesSection />
		</div>
	)
}

export const actionMainPage = async ({ params, request }) => {
	const formData = await request.formData();
	const searchParams = new URLSearchParams();

	for (let pair of formData.entries()) {
		searchParams.append(pair[0], pair[1].toString());
	}

	return redirect(`/catalog?${searchParams.toString()}`)
}
