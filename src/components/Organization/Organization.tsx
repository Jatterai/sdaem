import React from "react";
import { Container } from "../Container/Container";
import { LinesIcon, PlatesIcon, PinIcon, XexexeIcon } from "../icons";
import styles from './Organization.module.scss';
import { Select } from "../Select/Select";


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
				<Select
					name='order'
					className={styles.sort}
					onChange={changeSortParam}
					options={[
						{ value: 'default', label: 'По умолчанию', defaultChecked: true },
						{ value: 'price', label: 'Цена' },
						{ value: 'rooms', label: 'Количество комнат' },
						{ value: 'owner', label: 'Продавец' },
					]}
				/>
				<div className={styles.radios}>
					<label className={styles.radio + ' ' + styles.item}>
						<input type="radio" name='style' value='lines' onInput={changeStyle} />
						<span>
							<LinesIcon className={styles.icon} />
							<span>Список</span>
						</span>
					</label>
					<label className={styles.radio + ' ' + styles.item}>
						<input type="radio" name="style" value={'cards'} onInput={changeStyle} defaultChecked={true} />
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
