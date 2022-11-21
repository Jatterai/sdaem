import React, { useState } from 'react';
import Container from '../Container/Container';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { HeaderList } from '../../types';
import { NavLink } from 'react-router-dom';


const Header = () => {

	const [isActive, setIsActive] = useState(4);

	const setActive = ({ isActive }) => isActive ? (styles.link + ' ' + styles.active) : styles.link;

	return (
		<header className={styles.header} id="header">
			<Container className={styles.container}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink to="/" className={setActive}>
								Главная
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to="/news" className={setActive}>
								Новости
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to="/tariffs" className={setActive}>
								Размещение и тарифы
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to="/cart" className={setActive}>
								<i className="_icon-loc" />Объявления на карте
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to="/contacts" className={setActive}>
								Контакты
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={styles.additional}>
					<div className={styles.favs}>
						<span>Закладки</span>
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path stroke='red' d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
					</div>
					<a href="#" className={styles.login}>Вход и регистрация</a>
				</div>
			</Container>
			<div className={styles.main__header}>
				<Container className={styles.main__container}>
					<img src={logo} alt="" />
					<nav className={styles.main__nav}>
						<ul className={styles.main__list}>
							<li>
								<NavLink to='/apartments' className={setActive}>Квартиры на сутки <i className="_icon-loc" /></NavLink>
							</li>
							<li>
								<NavLink to='/cottage' className={setActive}>Коттеджи и усадьбы</NavLink>
							</li>
							<li>
								<NavLink to='/baths' className={setActive}>Бани и Сауны</NavLink>
							</li>
							<li>
								<NavLink to='/auto' className={setActive}>Авто напрокат</NavLink>
							</li>
						</ul>
					</nav>
					<button className={styles.button}>+ Разместить объявление</button>
				</Container>
			</div>

		</header>
	)
}

export default Header