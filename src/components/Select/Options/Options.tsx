import { TUsual } from '../../../types';
import styles from './Options.module.scss';

export const Options = ({ children, className, onMouseLeave }: TUsual) => {
	return (
		<div className={styles.radios + ' ' + className} onMouseLeave={onMouseLeave}>
			{children}
		</div>
	)
}
