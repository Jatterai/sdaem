import { Breadcrumps, Container, Organization, Paginate, SortingForm, Title } from '../../components';
import styles from './CatalogPage.module.scss';
import { ApartmentCard } from '../../components/ApartmentCard/ApartmentCard';
import { useDispatch, useSelector } from 'react-redux';
import { FacebookIcon, PinIcon, TelegramIcon, ViberIcon, VkIcon, WhatsappIcon } from '../../components/icons';
import { usePaginate } from '../../hooks/usePaginate';
import { useEffect, useState } from 'react';
import { sortItems } from '../../app/features/catalog/catalogSlice';
import { useSrchParams } from '../../hooks/useSrchParams';


export const CatalogPage = () => {
	const [sortingParam, setSortingParam] = useState('');
	const [styleParam, setSyleParam] = useState('cards')
	const { catalogItems, isLoading } = useSelector(state => state.catalog);
	const dispatch = useDispatch();
	const { searchParams, setSearchParams, params } = useSrchParams();

	useEffect(() => {
		dispatch(sortItems(sortingParam));
	}, [sortingParam])

	const filtered = catalogItems
		.filter(item => {
			const rooms = params.rooms ? item.roomsCount == params.rooms : true;
			const priceFrom = params.priceFrom ? item.price >= +params.priceFrom : true;
			const priceTo = params.priceTo ? item.price <= +params.priceTo : true;
			const bedrooms = params.bedroomsCount ? item.bedroomsCount == params.bedroomsCount : true;
			const district = params.district ? params.district == item.adress.district : true;
			const subway = params.subway ? params.subway == item.adress.subway : true;
			const stuff = params.stuff ? params.stuff.every(el => item.stuff.includes(el)) : true;

			return rooms && priceFrom && priceTo && bedrooms && district && subway && stuff
		})

	const {
		currentItems,
		handlePageClick,
		pageCount
	} = usePaginate(filtered, 6);


	const aparmentItems = currentItems
		.map(item => (
			<ApartmentCard
				key={item.id}
				item={item}
				className={styleParam === 'cards' ? '' : "line"}
			/>))

	const wordAffix = /[234]$/.test(filtered.length.toString()) ? "а" :
		/^.*1$/.test(filtered.length.toString()) ? "" :
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
			<div className={styles.forms}>
				<SortingForm searchParams={searchParams} setSearchParams={setSearchParams} params={params} />
				<Organization setParam={setSortingParam} setStyle={setSyleParam} />
			</div>
			<article className={styles.body}>
				{
					isLoading ?
						<h3 className='loading'>Падажжи</h3> :
						<Container className={styles.container}>
							<p className={styles.count}>
								Найдено {filtered.length} результат{wordAffix}
							</p>
							<div className={styles[styleParam]}>
								{aparmentItems}
							</div>
							<div className={styles.paginate}>
								<Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
								<div className={styles.share}>
									<span>Поделиться</span>
									<ul>
										<li><a href='http://wikipedia.org' target={'_blank'}><VkIcon /></a></li>
										<li><a href='http://wikipedia.org' target={'_blank'}><FacebookIcon /></a></li>
										<li><a href='http://wikipedia.org' target={'_blank'}><ViberIcon /></a></li>
										<li><a href='http://wikipedia.org' target={'_blank'}><TelegramIcon /></a></li>
										<li><a href='http://wikipedia.org' target={'_blank'}><WhatsappIcon /></a></li>
									</ul>
								</div>
							</div>
						</Container>
				}
			</article>
			<div className={styles.showOnMap + ' bg-with-map'}>
				<Container className={styles.showOnMap_container}>
					<h3 className={styles.title}>Показать найденные квартиры на карте</h3>
					<p className={styles.text}>Ищите новостройки рядом с работой,
						парком или родственниками</p>
					<button className={styles.button}>
						<PinIcon className={styles.icon} />
						Открыть карту
					</button>
				</Container>
			</div>
		</section>
	)
}
