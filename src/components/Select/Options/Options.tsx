import { TOptions, TUsual } from '../../../types';
import styles from './Options.module.scss';

export const Options = ({ children, className, setIsOpen, onChange }: TOptions) => {
	return (
		<div
			className={styles.radios + ' ' + className}
			onMouseLeave={() => setIsOpen(false)}
			onClick={(e) => {
				e.stopPropagation();
				setIsOpen(false);
				onChange(e)
			}}
		>
			{children}
		</div>
	)
}
