import { Breadcrumps, Container, Paginate, Title } from '../../components';
import styles from './CatalogPage.module.scss';
import { ApartmentCard } from '../../components/ApartmentCard/ApartmentCard';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { FacebookIcon, TelegramIcon, ViberIcon, VkIcon, WhatsappIcon } from '../../components/icons';


export const CatalogPage = () => {
	const { catalogItems, isLoading } = useSelector(state => state.catalog);
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 6;
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = catalogItems.slice(itemOffset, endOffset);
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % catalogItems.length;
		setItemOffset(newOffset);
		window.scrollTo(0, 0)
	};

	const aparmentItems = currentItems.map(item => (
		<ApartmentCard
			key={item.id}
			item={item}
			className={styles.card}
		/>))

	const wordAffix = /[234]$/.test(catalogItems.length.toString()) ? "а" :
		/1$/.test(catalogItems.length.toString()) ? "" :
			'ов'


	return (
		<section className={styles.catalog}>
			<article className={styles.header}>
				<Container className={styles.container}>
					<Breadcrumps
						className={styles.breadcrumps}
						links={[{ name: 'Квартиры в Минске', link: '/catalog', current: true }]}
					/>
					<Title addClass={styles.title}>Аренда квартир на сутки в Минске</Title>
				</Container>
			</article>
			<article className={styles.body}>
				{
					isLoading ?
						<h3 className='loading'>Падажжи</h3> :
						<Container className={styles.container}>
							<p className={styles.count}>
								Найдено {catalogItems.length} результат{wordAffix}
							</p>
							<div className={styles.cards}>
								{aparmentItems}
							</div>
							<div className={styles.paginate}>
								<Paginate handlePageClick={handlePageClick} pageCount={Math.ceil(catalogItems.length / itemsPerPage)} />
								<div className={styles.share}>
									<span>Поделиться</span>
									<ul>
										<li><VkIcon /></li>
										<li><FacebookIcon /></li>
										<li><ViberIcon /></li>
										<li><TelegramIcon /></li>
										<li><WhatsappIcon /></li>
									</ul>
								</div>
							</div>
						</Container>
				}
			</article>

		</section>
	)
}
