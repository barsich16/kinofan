import { Range } from 'react-range';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { useRef } from 'react';
import { SliderTrack } from './components/SliderTrack/SliderTrack';

export const SliderRange = ({ value, setValue, step, min, max, name }) => {
	const initialValueRef = useRef(value);

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

	const changeValue = (e) => {
		setValue(e);
	};

	return (
		<Range
			step={step}
			min={min}
			max={max}
			values={value}
			onChange={(e) => changeValue(e)}
			name={name}
			renderThumb={handleRenderThumb}
			renderTrack={handleRenderTrack}
		/>
	);
};
