import styles from './Option.module.scss';
import { TOption } from '../../../types';

export const Option = ({ className, label, id, value, name, onChange, onReset }: TOption) => {
	return (
		<label className={styles.radio + ' ' + className} >
			<input
				type="radio"
				name={name}
				value={value}
				id={id?.toString()}
				onClick={e => e.stopPropagation()}
				onChange={onChange}
			/>
			<span>{label}</span>
		</label>
	)
}
