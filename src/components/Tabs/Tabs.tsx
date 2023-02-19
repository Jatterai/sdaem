import styles from './Tabs.module.scss';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { SortingParamLabel } from '../SortingParamLabel/SortingParamLabel';
import { Select } from '../Select/Select';
import { MoreOptionsButton } from '../MoreOptions/MoreOptionsButton';
import { useToggle } from '../../hooks/useToggle';
import { PinIcon } from '../icons';
import { MoreOptions } from '../MoreOptions/MoreOptions';


export const Tabs = () => {
	const [activeTab, setActiveTab] = useState('apartmens');
	const [isOpen, setIsOpen] = useToggle();

	const currentClass = (str: string) => activeTab === str ? ` ${styles.active}` : '';

	const handleClick = (e) => {
		const button = e.target.closest('button');
		if (!button) return;
		setActiveTab(e.target.dataset.for)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.buttons} onClick={handleClick}>
				<button
					className={styles.button + currentClass('apartmens')}
					data-for={'apartmens'}
				>
					Квартиры на сутки
				</button>
				<button
					className={styles.button + currentClass('cottages')}
					data-for={'cottages'}
				>
					Коттеджи и усадьбы
				</button>
				<button
					className={styles.button + currentClass('saunas')}
					data-for={'saunas'}
				>
					Бани и сауны
				</button>
				<button
					className={styles.button + currentClass('auto')}
					data-for={'auto'}
				>
					Авто на прокат
				</button>
			</div>
			<div className={styles.tabs}>
				<Form
					method='post'
					action='/'
					className={styles.tab + currentClass('apartmens')}
					id='apartmens'
				>
					<div className={styles.form}>
						<SortingParamLabel txt='Город' labelClassName={styles.label} className={styles.form_item} >
							<Select
								className={styles.select + ' ' + styles.input}
								activeClassName={styles.active}
								name=''
								options={[
									{ value: '', label: 'Минск' },
									{ value: '1', label: 'Город 1' },
									{ value: '2', label: 'Город 2' },
									{ value: '3', label: 'Город 3' },
								]}
							/>
						</SortingParamLabel>
						<SortingParamLabel txt='Комнаты' labelClassName={styles.label} className={styles.form_item} >
							<Select
								className={styles.select + ' ' + styles.input}
								activeClassName={styles.active}
								name='rooms'
								options={[
									{ value: '1', label: '1 комн.', },
									{ value: '2', label: '2 комн.', },
									{ value: '3', label: '3 комн.', },
									{ value: '4', label: '4 комн.', },
									{ value: '5', label: '5 комн.', },
								]}
							/>
						</SortingParamLabel>
						<SortingParamLabel txt='Цена за сутки (BYN)' labelClassName={styles.label} className={styles.form_item} >
							<div className={styles.inputs}>
								<input name='priceFrom' type="number" placeholder='От' />
								<span className={styles.hh}> - </span>
								<input name='priceTo' type="number" placeholder='До' />
							</div>
						</SortingParamLabel>
						<MoreOptionsButton className={styles.more_options_button} isOpen={isOpen} setIsOpen={setIsOpen} />
						<div className={styles.onMap}>На карте <PinIcon /></div>
						<button className={styles.submit}>Показать</button>
					</div>
					<MoreOptions isOpen={isOpen} className={styles.more_options} />
				</Form>
				<div className={styles.tab + currentClass('cottages')} id='cottages'>
					КОТТЕДЖИ
				</div>
				<div className={styles.tab + currentClass('saunas')} id='saunas'>
					БАНИ
				</div>
				<div className={styles.tab + currentClass('auto')} id='auto'>
					АВТО
				</div>
			</div>
		</div>
	)
}
