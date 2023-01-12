import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import style from './Error.module.scss'

const Error = () => {
	const error = useRouteError();

	return (
		<section className={`${style.error} bg-with-map`}>
			<Container className={style.container}>
				<div className={style.info}>
					<h2 className={style.title}>Ошибка 404</h2>
					<p className={style.description}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
					<Link to='/' className={style.button}>
						<i className={`${style.icon} _icon-home`}></i> Вернуться на главную
					</Link>
				</div>
				<p className={style.number}>404</p>
			</Container>
		</section>
	)
}

export default Error