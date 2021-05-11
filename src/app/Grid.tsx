import { useCallback } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';

let drawing: HTMLButtonElement | undefined;

function getPos(button: HTMLButtonElement) {
	return [parseInt(button.dataset.x || '0', 10), parseInt(button.dataset.y || '0', 10)] as const;
}

export function Grid({
	value,
	required,
	toggleValue,
	...props
}: Omit<JSXInternal.HTMLAttributes<HTMLDivElement>, 'value' | 'required'> & { value: boolean[][]; required: boolean[][]; toggleValue: (x: number, y: number) => void }) {
	const startDrawing = useCallback<NonNullable<JSXInternal.HTMLAttributes<HTMLButtonElement>['onClick']>>(
		event => {
			const target = event.currentTarget;
			const targetValue = event.currentTarget.value === 'true' ? 'false' : 'true';
			drawing = event.currentTarget;
			toggleValue(...getPos(target));
			function onMove(e: MouseEvent) {
				if (e.target?.dataset?.pixel === undefined) return;
				if (e.target.value === targetValue) return;
				toggleValue(...getPos(e.target));
			}
			function onUp() {
				window.removeEventListener('mousemove', onMove);
				window.removeEventListener('mouseup', onUp);
			}
			window.addEventListener('mousemove', onMove);
			window.addEventListener('mouseup', onUp);
		},
		[toggleValue]
	);
	const onClick = useCallback<NonNullable<JSXInternal.HTMLAttributes<HTMLButtonElement>['onClick']>>(
		event => {
			const target = event.currentTarget;
			if (drawing === target) return;
			drawing = undefined;
			toggleValue(...getPos(target));
		},
		[toggleValue]
	);
	return (
		<div {...props} className="grid">
			{value.map((row, y) =>
				row.map((i, x) => (
					<button data-pixel aria-label={`pixel x: ${x}, y: ${y}`} data-x={x} data-y={y} disabled={required[y][x]} value={(required[y][x] || value[y][x]).toString()} onMouseDown={startDrawing} onClick={onClick}/>
				))
			)}
		</div>
	);
}
