import React from "react";
import { Container } from "../Container/Container";
import { LinesIcon, PlatesIcon, PinIcon, XexexeIcon } from "../icons";
import styles from './Organization.module.scss'


export const Organization = ({ setParam, setStyle }) => {

	const changeSortParam = (e: React.ChangeEvent) => { setParam(e.target.value) };
	const changeStyle = (e: React.ChangeEvent) => setStyle(e.target.value)


	return (
		<form
			action="#"
			className={styles.form}
			onSubmit={(e) => { e.preventDefault() }}
		>
			<Container className={styles.container}>
				<select
					name='order'
					id='order'
					className={styles.sorting + ' ' + styles.item}
					onChange={changeSortParam}
				>
					<option value={'default'} selected>По умолчанию</option>
					<option value={'price'}>Цена</option>
					<option value={'rooms'}>Кол-во комнат</option>
					<option value={'owner'}>Продавец</option>
				</select>
				<div className={styles.radios}>
					<label className={styles.radio + ' ' + styles.item}>
						<input type="radio" name='style' value='lines' onInput={changeStyle} />
						<span>
							<LinesIcon className={styles.icon} />
							<span>Список</span>
						</span>
					</label>
					<label className={styles.radio + ' ' + styles.item}>
						<input type="radio" name="style" value={'cards'} onInput={changeStyle} />
						<span>
							<PlatesIcon className={styles.icon} />
							<span>Плитки</span>
						</span>
					</label>
				</div>
				<button className={styles.onmap + ' ' + styles.item}>
					<PinIcon className={styles.icon} /><span>Показать на карте</span>
				</button>
			</Container>
		</form>
	)
}
