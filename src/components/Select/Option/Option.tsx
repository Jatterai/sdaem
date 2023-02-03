import styles from './Option.module.scss';
import { TOption } from '../../../types';
import { useEffect, useRef } from 'react';

export const Option = ({ className, label, id, value, name, defaultChecked, setLabel, mainLabel }: TOption) => {
	const ref = useRef();
	useEffect(() => {
		if (label === mainLabel && !ref.current.checked) setLabel('');
	});
	return (
		<label className={styles.radio + ' ' + className}>
			<input
				type="radio"
				name={name}
				value={value}
				id={id?.toString()}
				defaultChecked={defaultChecked}
				ref={ref}

			/>
			<span>{label}</span>
		</label>
	)
}
