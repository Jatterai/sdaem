import { Form } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ArrowRightIcon, OptionsIcon } from '../icons';
import { Select } from '../Select/Select';
import styles from './SortingForm.module.scss';

export const SortingForm = () => {
	return (
		<div className={styles.wrapper}>
			<Container className={styles.container}>
				<Form method='get' className={styles.form}>
					<div className={styles.label}>
						<span className={styles.label_text}>Комнаты</span>
						<Select
							name='rooms'
							className={styles.rooms}
							options={[
								{ value: 1, label: '1 комн.' },
								{ value: 2, label: '2 комн.' },
								{ value: 3, label: '3 комн.' },
								{ value: 4, label: '4 комн.' },
								{ value: 5, label: '5 комн.' },
							]}
						/>
					</div>
					<label className={styles.label}>
						<span className={styles.label_text}>Цена за сутки (BYN)</span>
						<input type="number" name='priceFrom' className={styles.input_number} />
						<span className={styles.label_text + ' ' + styles.hyphen}>-</span>
						<input type="number" name='priceTo' className={styles.input_number} />
					</label>
					<button type='button' className={styles.more_options_button}>
						<span>Больше опций</span> <OptionsIcon className={styles.icon} />
					</button>
					<div className={styles.controlForm}>
						<button type='reset' className={styles.reset_button}>Очистить</button>
						<button type='submit' className={styles.submit_button} >Показать объекты <ArrowRightIcon className={styles.icon} /></button>
					</div>
				</Form>
			</Container>

		</div>
	)
}
