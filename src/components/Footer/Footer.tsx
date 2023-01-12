
import { Container } from '../index';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

import visa from '../../assets/banks/visa.png';
import webpay from '../../assets/banks/webpay.png';
import verSisa from '../../assets/banks/verVisa.png';
import mastercard from '../../assets/banks/mastercard.png';
import mastercardsecure from '../../assets/banks/mastersecure.png';
import belcard from '../../assets/banks/secart.png';




export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.container}>
				<div className={`${styles.row} ${styles.infoRaw}`}>
					<div className={styles['infoRaw__logo']}>
						<img src={logo} alt="logo" />
						<span className={styles['infoRaw__txt']}>СДАЁМ БАЙ</span>
					</div>
					<p className={styles.infoRaw__body}>
						ИП Шушкевич Андрей Викторович<br />
						УНП 192602485 Минским горисполкомом<br />10.02.2016<br />
						220068, РБ, г. Минск, ул. Осипенко, 21, кв.23<br />
						+375 29 621 48 33, sdaem@sdaem.by<br />
						Режим работы: 08:00-22:00
					</p>
				</div>
				<div className={styles.row + ' ' + styles.sections}>
					<NavLink to='' className={styles.link}>Коттеджи и усадьбы</NavLink>
					<NavLink to='' className={styles.link}>Бани и сауны</NavLink>
					<NavLink to='' className={styles.link}>Авто на прокат</NavLink>
				</div>
				<div className={styles.row + ' ' + styles.aparments}>
					<h6 className={styles.title}>Квартиры</h6>
					<ul className={styles.list}>
						<li><a>Квартиры в Минске</a></li>
						<li><a>Квартиры в Гомеле</a></li>
						<li><a>Квартиры в Бресте</a></li>
						<li><a>Квартиры в Витебске</a></li>
						<li><a>Квартиры в Гродно</a></li>
						<li><a>Квартиры в Могилеве</a></li>
					</ul>
				</div>
				<div className={styles.row + ' ' + styles.addSections}>
					<ul>
						<li><NavLink to={'/news'}>Новости</NavLink></li>
						<li><NavLink to={'/'}>Размещение и тарифы</NavLink></li>
						<li><NavLink to={'/'}>Объявления на карте</NavLink></li>
						<li><NavLink to={'/'}>Контакты</NavLink></li>
					</ul>
				</div>
				<div className={styles.row + ' ' + styles.media}>
					<div className={styles.main}>
						<span className={styles.title}>Мы в соцсетях</span>
						<a href='https://instagram.com' target={'_blank'}><i className='_icon-inst'></i></a>
						<a href='https://vk.com' target={'_blank'}><i className='_icon-vk'></i></a>
						<a href='https://facebook.com' target={'_blank'}><i className='_icon-fb'></i></a>
					</div>
					<div className={styles.banks}>
						<img src={visa} alt="visa" />
						<img src={webpay} alt="webpay" />
						<img src={verSisa} alt="verified by visa" />
						<img src={mastercard} alt="mastercard" />
						<img src={mastercardsecure} alt="secure mastercard" />
						<img src={belcard} alt="белкарт" />
					</div>

				</div>
			</Container>
		</footer>
	)
}
