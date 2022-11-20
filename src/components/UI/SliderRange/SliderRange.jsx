import styles from './SliderRange.module.scss';
import { Range } from 'react-range';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { useRef } from 'react';
import { SliderTrack } from './components/SliderTrack/SliderTrack';

// value={values.rating}
// step={1}
// min={1}
// max={10}
// onChange={handleChange}
// name='rating'

export const SliderRange = ({ value, setValue, step, min, max, name }) => {
	const initialValueRef = useRef(value);
	const onChangeRange = (val) => {
		console.log(val);
	};
	const handleRenderThumb = ({ props, value, index }) => {
		return (
			<SliderThumb
				key={index}
				props={props}
				value={value}
				initialValue={initialValueRef.current?.[index]}
			/>
		);
	};

	const handleRenderTrack = ({ props, children }) => {
		return (
			<SliderTrack min={min} max={max} values={value} props={props}>
				{children}
			</SliderTrack>
		);
	};

	const test = (e) => {
		setValue(e);
	};

	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={value}
			onChange={(e) => test(e)}
			name={name}
			renderThumb={handleRenderThumb}
			renderTrack={handleRenderTrack}
		/>
	);
};
