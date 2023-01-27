import { useState } from 'react';
import styles from './Select.module.scss';
import { Option } from './Option/Option';
import { Options } from './Options/Options';
import { TSelect } from '../../types';

export const Select = ({
	className,
	options,
	name,
	placeholder,
	optionsBoxClassName,
	optionClassName,
	onChange
}: TSelect) => {
	const initValue = options.find(e => e.defaultChecked)?.label || placeholder || 'Выберите';
	const [label, setLabel] = useState(initValue);

	const [isOpen, setIsOpen] = useState();
	const activeClass = isOpen ? ` ${styles.active}` : '';

	const handleChange = (e) => {
		if (onChange) onChange(e);
		const newSelected = options.find(el => el.value.toString() === e.target.value).label;
		setLabel(newSelected);
	}

	return (
		<div
			className={styles.select + ' ' + activeClass + ' ' + className}
			onClick={() => setIsOpen(p => !p)}
		>
			<span className={styles.label}>{label || 'Выберите'}</span>

			<Options className={styles.radios + ' ' + optionsBoxClassName} onMouseLeave={() => setIsOpen(false)}>
				{
					options.map((el, i) => (
						<Option
							name={name}
							value={el.value}
							id={el.i}
							label={el.label}
							onChange={handleChange}
							className={optionClassName}
							onReset={() => { console.log('reset'); setLabel('false') }}
						/>
					))
				}
			</Options>
		</div >
	)
}
