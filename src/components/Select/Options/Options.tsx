import { TOptions, TUsual } from '../../../types';
import styles from './Options.module.scss';

export const Options = ({ children, className, onMouseLeave, onChange }: TOptions) => {
	return (
		<div
			className={styles.radios + ' ' + className}
			onMouseLeave={onMouseLeave}
			onChange={onChange}
		>
			{children}
		</div>
	)
}
