import { JSXInternal } from 'preact/src/jsx';

export function Grid({
	value,
	required,
	toggleValue,
	...props
}: Omit<JSXInternal.HTMLAttributes<HTMLDivElement>, 'value' | 'required'> & { value: boolean[][]; required: boolean[][]; toggleValue: (x: number, y: number) => void }) {
	return (
		<div {...props} className="grid">
			{value.map((row, y) =>
				row.map((i, x) => (
					<button aria-label={`pixel x: ${x}, y: ${y}`} disabled={required[y][x]} value={(required[y][x] || value[y][x]).toString()} onClick={() => toggleValue(x, y)} />
				))
			)}
		</div>
	);
}
