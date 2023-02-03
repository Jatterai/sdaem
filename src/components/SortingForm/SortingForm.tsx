import { Form } from 'react-router-dom';
import { useResetForm } from '../../hooks/useResetForm';
import { Container } from '../Container/Container';
import { ArrowRightIcon, OptionsIcon } from '../icons';
import { Select } from '../Select/Select';
import styles from './SortingForm.module.scss';
import { districts, subways, stuffList } from '../../idk';
import { Checkbox } from '../Checkbox/Checkbox';
import { useToggle } from '../../hooks/useToggle';

export const SortingForm = ({ setSearchParams, params }) => {
	const reset = useResetForm();
	const [isOpen, setIsOpen] = useToggle();

	return (
		<div className={styles.wrapper}>
			<Form
				method='get'
				className={styles.form}
				onReset={(e) => setSearchParams('')}
			>
				<Container className={styles.firstContainer}>
					<div className={styles.label}>
						<span className={styles.label_text}>Комнаты</span>
						<Select
							name='rooms'
							className={styles.select + ' ' + styles.rooms}
							activeClassName={styles.select__active}
							options={[
								{ value: 1, label: '1 комн.', checked: params.rooms == 1 },
								{ value: 2, label: '2 комн.', checked: params.rooms == 2 },
								{ value: 3, label: '3 комн.', checked: params.rooms == 3 },
								{ value: 4, label: '4 комн.', checked: params.rooms == 4 },
								{ value: 5, label: '5 комн.', checked: params.rooms == 5 },
							]}
						/>
					</div>
					<label className={styles.label}>
						<span className={styles.label_text}>Цена за сутки (BYN)</span>
						<input type="number" placeholder='От' name='priceFrom' defaultValue={params.priceFrom} className={styles.input_number} />
						<span className={styles.label_text + ' ' + styles.hyphen}>-</span>
						<input type="number" placeholder='До' name='priceTo' defaultValue={params.priceTo} className={styles.input_number} />
					</label>
					<button
						type='button'
						onClick={setIsOpen}
						className={styles.more_options_button + (isOpen ? ` ${styles.opened}` : '')}
					>
						<span>Больше опций</span> <OptionsIcon className={styles.icon} />
					</button>
					<div className={styles.controlForm}>
						<button type='reset' onClick={reset} className={styles.reset_button}>Очистить</button>
						<button type='submit' className={styles.submit_button} >Показать объекты <ArrowRightIcon className={styles.icon} /></button>
					</div>

				</Container>
				<Container className={styles.secondContainer + (isOpen ? ` ${styles.opened}` : '')}>
					<div className={styles.selects}>
						<p className={styles.selects_label}>
							<span className={styles.label}>Спальные места</span>
							<Select
								className={styles.select}
								activeClassName={styles.select__active}
								name='bedroomsCount'
								options={[
									{ value: 1, label: '1 место', checked: params.bedroomsCount == 1 },
									{ value: 2, label: '2 места', checked: params.bedroomsCount == 2 },
									{ value: 3, label: '3 места', checked: params.bedroomsCount == 3 },
									{ value: 4, label: '4 места', checked: params.bedroomsCount == 4 },
									{ value: 5, label: '5 мест', checked: params.bedroomsCount == 5 },
								]}
							/>
						</p>
						<p className={styles.selects_label}>
							<span className={styles.label}>Район</span>
							<Select
								className={styles.select}
								activeClassName={styles.select__active}
								name='district'
								options={districts.map(el => ({ value: el, label: el, checked: params[el] === el }))}
							/>
						</p>
						<p className={styles.selects_label}>
							<span className={styles.label}>Метро</span>
							<Select
								className={styles.select}
								activeClassName={styles.select__active}
								name='subway'
								options={subways.map(el => ({ value: el, label: el, checked: params[el] === el }))}
							/>
						</p>
					</div>
					<div className={styles.checkboxes}>
						{
							stuffList.map(el => (
								<Checkbox
									name={'stuff'}
									value={el}
									label={el}
									defaultChecked={params.stuff?.includes(el)}
								/>
							))
						}
					</div>
				</Container>
			</Form>
		</div >
	)
}
