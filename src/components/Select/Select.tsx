import { useState } from 'react';
import styles from './Select.module.scss';
import { Option } from './Option/Option';
import { Options } from './Options/Options';
import { TSelect } from '../../types';
// this comment!!
export const Select = ({
	className,
	activeClassName,
	options,
	name,
	placeholder,
	optionsBoxClassName,
	optionClassName,
	onChange
}: TSelect) => {
	const [label, setLabel] = useState(options.find(el => el.checked)?.label || '');
	const [isOpen, setIsOpen] = useState();
	const activeClass = isOpen ? ` ${styles.active} ${activeClassName}` : '';

	const handleChange = (e) => {
		if (onChange) onChange(e);
		const newLabel = e.target.closest('label').textContent;
		setLabel(newLabel)
	}

	return (
		<div
			className={styles.select + ' ' + activeClass + ' ' + className}
			onClick={() => setIsOpen(p => !p)}
		>
			<span className={styles.label}>{label || placeholder || 'Выберите'}</span>

			<Options
				className={styles.radios + ' ' + optionsBoxClassName}
				onMouseLeave={() => setIsOpen(false)}
				onChange={handleChange}
			>
				{
					options.map((el, i) => (
						<Option
							name={name}
							value={el.value}
							id={'no' + i}
							label={el.label}
							className={optionClassName}
							defaultChecked={!!el.checked}
							setLabel={setLabel}
							mainLabel={label}
						/>
					))
				}
			</Options>
		</div >
	)
}
