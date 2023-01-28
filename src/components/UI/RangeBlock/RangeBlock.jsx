import styles from './RangeBlock.module.scss';
import { SliderRange } from '../SliderRange/SliderRange';
import { SearchInput } from '../SearchInput/SearchInput';
import { useField } from 'formik';

export const RangeBlock = (props) => {
	const { name, min, max } = props;

	const [field, , helpers] = useField(name);
	const { value } = field;
	const { setValue } = helpers;

	return (
		<div className={styles.main}>
			<div className={styles.inputs}>
				<SearchInput
					label='Від'
					value={value[0]}
					min={min}
					max={value[1]}
					type='number'
					onChange={(event) => setValue([event.target.value, value[1]])}
					name={name}
				/>
				<SearchInput
					label='До'
					value={value[1]}
					max={max}
					min={value[0]}
					type='number'
					onChange={(event) => setValue([value[0], event.target.value])}
					name={name}
				/>
			</div>
			<SliderRange value={value} setValue={setValue} {...props} />
		</div>
	);
};
