import { Form, useSearchParams } from 'react-router-dom';
import { useResetForm } from '../../hooks/useResetForm';
import { Container } from '../Container/Container';
import { ArrowRightIcon, OptionsIcon } from '../icons';
import { Select } from '../Select/Select';
import styles from './SortingForm.module.scss';
import { districts, subways, stuffList } from '../../idk';
import { Checkbox } from '../Checkbox/Checkbox';
import { useToggle } from '../../hooks/useToggle';

export const SortingForm = () => {
	const [searchParams, setSeachParams] = useSearchParams();
	const reset = useResetForm();
	const [isOpen, setIsOpen] = useToggle();

	return (
		<div className={styles.wrapper}>
			<Form
				method='get'
				className={styles.form}
				onReset={(e) => setSeachParams('')}
			>
				<Container className={styles.firstContainer}>
					<div className={styles.label}>
						<span className={styles.label_text}>Комнаты</span>
						<Select
							name='rooms'
							className={styles.select + ' ' + styles.sort}
							activeClassName={styles.rooms__active}
							options={[
								{ value: 1, label: '1 комн.', checked: searchParams.get('rooms') == 1 },
								{ value: 2, label: '2 комн.', checked: searchParams.get('rooms') == 2 },
								{ value: 3, label: '3 комн.', checked: searchParams.get('rooms') == 3 },
								{ value: 4, label: '4 комн.', checked: searchParams.get('rooms') == 4 },
								{ value: 5, label: '5 комн.', checked: searchParams.get('rooms') == 5 },
							]}
						/>
					</div>
					<label className={styles.label}>
						<span className={styles.label_text}>Цена за сутки (BYN)</span>
						<input type="number" name='priceFrom' className={styles.input_number} />
						<span className={styles.label_text + ' ' + styles.hyphen}>-</span>
						<input type="number" name='priceTo' className={styles.input_number} />
					</label>
					<button type='button' onClick={setIsOpen} className={styles.more_options_button}>
						<span>Больше опций</span> <OptionsIcon className={styles.icon} />
					</button>
					<div className={styles.controlForm}>
						<button onClick={reset} className={styles.reset_button}>Очистить</button>
						<button type='submit' className={styles.submit_button} >Показать объекты <ArrowRightIcon className={styles.icon} /></button>
					</div>

				</Container>
				{isOpen &&
					<Container className={styles.secondContainer}>
						<div className={styles.selects}>
							<p className={styles.selects_label}>
								<span className={styles.label}>Спальные места</span>
								<Select
									className={styles.select}
									name='bedroomsCount'
									options={[
										{ value: 1, label: '1 место' },
										{ value: 2, label: '2 места' },
										{ value: 3, label: '3 места' },
										{ value: 4, label: '4 места' },
										{ value: 5, label: '5 мест' },
									]}
								/>
							</p>
							<p className={styles.selects_label}>
								<span className={styles.label}>Район</span>
								<Select
									className={styles.select}
									name='district'
									options={districts.map(el => ({ value: el, label: el }))}
								/>
							</p>
							<p className={styles.selects_label}>
								<span className={styles.label}>Метро</span>
								<Select
									className={styles.select}
									name='subway'
									options={subways.map(el => ({ value: el, label: el }))}
								/>
							</p>
						</div>
						<div className={styles.checkboxes}>
							{
								stuffList.map(el => (
									<Checkbox name={'stuff' + el} value={el} label={el} />
								))
							}
						</div>
					</Container>
				}
			</Form>
		</div >
	)
}
