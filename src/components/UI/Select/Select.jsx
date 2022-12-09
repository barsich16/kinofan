import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { useField } from 'formik';

export const Select = ({ options, name, placeholder, isMulti = false }) => {
	const [field, , helpers] = useField(name);
	const { value } = field;
	const { setValue } = helpers;

	const animatedComponents = makeAnimated();

	const selectStyle = {
		indicatorSeparator: (base) => ({
			display: 'none',
		}),
		valueContainer: (base) => ({
			...base,
			padding: '10px 15px',
		}),
		singleValue: (base) => ({
			...base,
			fontSize: 15,
			fontWeight: 400,
			color: 'rgb(51, 51, 51)',
		}),
		control: (base) => ({
			...base,
			borderColor: 'rgba(0,0,0, 0.3)',
			'&:hover': { borderColor: 'rgba(0,0,0, 0.4)' },
			border: '1px solid lightgray',
			boxShadow: 'none',
		}),
		option: (provided, state) => ({
			...provided,
			'&:active': { backgroundColor: 'rgba(0,0,0, 0.1)' },
			backgroundColor: state.isSelected
				? '#005382 !important;'
				: state.isFocused
				? '#f2f2f2'
				: '#fff',
			color: state.isSelected ? '#fff' : '#000',
			padding: '10px 15px',
		}),
		noOptionsMessage: (base) => ({
			...base,
			color: '#000',
		}),
	};

	return (
		<ReactSelect
			options={options}
			isMulti={isMulti}
			closeMenuOnSelect={!isMulti}
			components={animatedComponents}
			styles={selectStyle}
			noOptionsMessage={() => 'Нічого не знайдено!'}
			placeholder={placeholder}
			onChange={(newValue) => setValue(newValue)}
			value={value}
		/>
	);
};
