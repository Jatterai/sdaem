import { Form } from 'react-router-dom';
import { useResetForm } from '../../hooks/useResetForm';
import { Container } from '../';
import { ArrowRightIcon } from '../icons';
import { Select } from '../Select/Select';
import styles from './SortingForm.module.scss';
import { useToggle } from '../../hooks/useToggle';
import { TSortingForm } from '../../types';
import { SortingParamLabel } from '../SortingParamLabel/SortingParamLabel';
import { MoreOptions } from '../MoreOptions/MoreOptions';
import { MoreOptionsButton } from '../MoreOptions/MoreOptionsButton';

export const SortingForm = ({ setSearchParams, params }: TSortingForm) => {
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
					<SortingParamLabel txt={'Комнаты'} className={styles.label} labelClassName={styles.txt}>
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
					</SortingParamLabel>
					<SortingParamLabel txt='Цена за сутки (BYN)' className={styles.label} labelClassName={styles.txt}>
						<input type="number" placeholder='От' name='priceFrom' defaultValue={params.priceFrom} className={styles.input_number} />
						<span className={styles.label_text + ' ' + styles.hyphen}>-</span>
						<input type="number" placeholder='До' name='priceTo' defaultValue={params.priceTo} className={styles.input_number} />
					</SortingParamLabel>
					<MoreOptionsButton setIsOpen={setIsOpen} isOpen={isOpen} className={styles.more_options_button} />
					<div className={styles.controlForm}>
						<button type='reset' onClick={reset} className={styles.reset_button}>Очистить</button>
						<button type='submit' className={styles.submit_button} >Показать объекты <ArrowRightIcon className={styles.icon} /></button>
					</div>

				</Container>
				<MoreOptions className={styles.secondContainer + ' ' + (isOpen && styles.opened)} params={params} />
			</Form>
		</div >
	)
}
