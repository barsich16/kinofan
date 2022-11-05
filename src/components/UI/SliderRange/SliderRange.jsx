import styles from './SliderRange.module.scss';
import { Range } from 'react-range';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { useRef } from 'react';
import { SliderTrack } from './components/SliderTrack/SliderTrack';

export const SliderRange = ({ values, onChange, step, min, max }) => {
	const initialValueRef = useRef(values);
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
			<SliderTrack min={min} max={max} values={values} props={props}>
				{children}
			</SliderTrack>
		);
	};

	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={values}
			onChange={onChange}
			renderThumb={handleRenderThumb}
			renderTrack={handleRenderTrack}
		/>
	);
};
