import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../';
import styles from './CatalodSection.module.scss';
import apart from '../../assets/forGrid/ap.jpg';
import cottage from '../../assets/forGrid/cot.jpg';
import sauna from '../../assets/forGrid/saun.jpg';
import auto from '../../assets/forGrid/auto.jpg';

export const CatalodSection = () => {
	const { catalogItems } = useSelector(state => state.catalog)
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.item}>
						<div className={styles.content}>
							<p className={styles.toDo}>снять квартиру</p>
							<h5 className={styles.title}>Квартиры на сутки</h5>
							<ul className={styles.links}>
								<li><Link to='/catalog'>Минск</Link></li>
								<li><Link to=''>Витебск</Link></li>
								<li><Link to=''>Гродно</Link></li>
								<li><Link to=''>Гомель</Link></li>
								<li><Link to=''>Брест</Link></li>
								<li><Link to=''>Могилев</Link></li>
							</ul>
						</div>
						<img src={apart} alt="apartments" />
					</div>
					<Link to='/no' target={'_blank'} className={styles.item}>
						<div className={styles.content}>
							<p className={styles.toDo}>СНЯТЬ коттедж НА ПРАЗДНИК</p>
							<h5 className={styles.title}>Коттеджи и усадьбы</h5>
						</div>
						<img src={cottage} alt="cottage" />
					</Link>
					<Link to='/no' target={'_blank'} className={styles.item}>
						<div className={styles.content}>
							<p className={styles.toDo}>ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ</p>
							<h5 className={styles.title}>Бани и сауны</h5>
						</div>
						<img src={sauna} alt="sauna" />
					</Link>
					<Link to='/no' target={'_blank'} className={styles.item}>
						<div className={styles.content}>
							<p className={styles.toDo}>еСЛИ СРОЧНО НУЖНА МАШИНА</p>
							<h5 className={styles.title}>Авто на прокат</h5>
						</div>
						<img src={auto} alt="auto" />
					</Link>
				</div>
				<div className={styles.menus}>
					<div className={styles.menu}>
						<h5 className={styles.title}>Квартиры</h5>
						<div className={styles.list}>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Минске</span>
								<span className={styles.amount}>{catalogItems.length}</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Гомеле</span>
								<span className={styles.amount}>47</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Гродно</span>
								<span className={styles.amount}>42</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Могилеве</span>
								<span className={styles.amount}>42</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Бресте</span>
								<span className={styles.amount}>42</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Квартиры в Витебске</span>
								<span className={styles.amount}>42</span>
							</Link>
						</div>
					</div>
					<div className={styles.menu}>
						<h5 className={styles.title}>Коттеджи и усадьбы</h5>
						<div className={styles.list}>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Аггроусадьбы</span>
								<span className={styles.amount}>{catalogItems.length}</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Коттеджи</span>
								<span className={styles.amount}>47</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Загородный комплекс</span>
								<span className={styles.amount}>42</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Базы отдыха</span>
								<span className={styles.amount}>42</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name + ' ' + styles.more}>Eщё</span>
							</Link>
						</div>
					</div>
					<div className={styles.menu}>
						<h5 className={styles.title}>Популярные направления</h5>
						<div className={styles.list}>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Коттеджи и усадьбы на о. Брасласких</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Коттеджи и усадьбы (жилье) на Нарочи</span>
							</Link>
							<Link to='/' className={styles.item}>
								<span className={styles.name}>Коттеджи и усадьбы (жилье) у воды,<br />
									на берегу, на озере</span>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
