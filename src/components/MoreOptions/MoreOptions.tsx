import { Container, Select, Checkbox } from '../'
import styles from './MoreOptions.module.scss';
import { districts, subways, stuffList } from '../../idk';

export const MoreOptions = ({ params, className }: { params: object, className: string }) => {
	console.log(params.stuff);
	return (
		<Container className={className}>
			<div className={styles.selects}>
				<p className={styles.selects_label}>
					<span className={styles.label}>Спальные места</span>
					<Select
						className={styles.select}
						activeClassName={styles.select__active}
						name='bedroomsCount'
						options={[
							{ value: 1, label: '1 место', checked: params.bedroomsCount == 1 },
							{ value: 2, label: '2 места', checked: params.bedroomsCount == 2 },
							{ value: 3, label: '3 места', checked: params.bedroomsCount == 3 },
							{ value: 4, label: '4 места', checked: params.bedroomsCount == 4 },
							{ value: 5, label: '5 мест', checked: params.bedroomsCount == 5 },
						]}
					/>
				</p>
				<p className={styles.selects_label}>
					<span className={styles.label}>Район</span>
					<Select
						className={styles.select}
						activeClassName={styles.select__active}
						name='district'
						options={districts.map(el => ({ value: el, label: el, checked: params[el] === el }))}
					/>
				</p>
				<p className={styles.selects_label}>
					<span className={styles.label}>Метро</span>
					<Select
						className={styles.select}
						activeClassName={styles.select__active}
						name='subway'
						options={subways.map(el => ({ value: el, label: el, checked: params[el] === el }))}
					/>
				</p>
			</div>
			<div className={styles.checkboxes}>
				{
					stuffList.map(el => (
						<Checkbox
							name={'stuff'}
							value={el}
							label={el}
							defaultChecked={params.stuff?.includes(el) ? true : false}
						/>
					))
				}
			</div>
		</Container>
	)
}
