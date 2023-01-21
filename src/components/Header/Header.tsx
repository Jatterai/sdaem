import React, { useState } from 'react';
import { Container } from '../Container/Container';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/avatar.jpg';
import { logOut } from '../../app/features/auth/authSlice';



export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { userData, isLogged } = useSelector(state => state.auth);
	const dispatch = useDispatch();

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
							<NavLink to="/map" className={setActive}>
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
					{isLogged ?
						<div className={styles.user} onClick={(e) => setIsOpen(pr => !pr)}>
							<img src={avatar} alt="" />
							<span>{userData.login}</span>
							{isOpen &&
								<button
									className={styles.logOut}
									onClick={(e) => {
										e.stopPropagation();
										dispatch(logOut());
										setIsOpen(false)
									}}
									onMouseLeave={(e) => setIsOpen(false)}
								>Выйти</button>
							}
						</div> :
						<Link to="/log/auth" className={styles.login}>Вход и регистрация</Link>
					}
				</div>
			</Container>
			<div className={styles.main__header}>
				<Container className={styles.main__container}>
					<NavLink to='/' className={styles.logo}><img src={logo} alt="" /></NavLink>
					<nav className={styles.main__nav}>
						<ul className={styles.main__list}>
							<li>
								<NavLink to='/catalog' className={setActive}>Квартиры в Минске <i className="_icon-loc" /></NavLink>
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
