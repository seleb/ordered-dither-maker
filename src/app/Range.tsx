import { JSXInternal } from 'preact/src/jsx';
import { useRange } from './utils';

export function Range({
	id,
	setValue,
	...props
}: Omit<JSXInternal.HTMLAttributes<HTMLInputElement>, 'onInput'> & {
	setValue: (value: number) => void;
}) {
	const onInput = useRange(setValue);
	return (
		<div className="range">
			<input {...props} id={`${id}-range`} type="range" onInput={onInput} />
			<input {...props} id={id} type="number" onInput={onInput} />
		</div>
	);
}
