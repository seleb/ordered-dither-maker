import Draw1Bit from 'draw-1-bit';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';

export function Grid({
	value,
	locked,
	immediate,
	setAll,
	setOne,
	...props
}: Omit<JSXInternal.HTMLAttributes<HTMLDivElement>, 'value' | 'locked'> & {
	value: boolean[][];
	locked: boolean[][];
	immediate: boolean;
	setAll: (value: boolean[][]) => void;
	setOne: (x: number, y: number, value: boolean) => void;
}) {
	const [width, height] = useMemo(() => [value[0].length, value.length], [value]);
	const drawRef = useRef<Draw1Bit>();
	useLayoutEffect(() => {
		drawRef.current = new Draw1Bit({ width: 0, height: 0 });
	}, [drawRef]);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (immediate) {
			function onInput(event: CustomEvent<{ x: number; y: number; value: boolean }>) {
				setOne(event.detail.x, event.detail.y, event.detail.value);
			}
			drawRef.current.addEventListener('draw', onInput);
			return () => {
				drawRef.current.removeEventListener('draw', onInput);
			};
		}
		function onEnd() {
			setAll(new Array(height).fill(0).map((_, y) => new Array(width).fill(0).map((_, x) => drawRef.current.fill(x, y))));
		}
		drawRef.current.addEventListener('drawend', onEnd);
		return () => {
			drawRef.current.removeEventListener('drawend', onEnd);
		};
	}, [width, height, immediate, setOne, setAll]);
	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.appendChild(drawRef.current.canvas);
	}, [ref]);
	useLayoutEffect(() => {
		drawRef.current.resize(width, height);
		drawRef.current.render();
	}, [width, height]);
	useLayoutEffect(() => {
		value.forEach((row, y) => {
			row.forEach((filled, x) => {
				drawRef.current.fill(x, y, filled);
			});
		});
		drawRef.current.render();
	}, [value]);
	useLayoutEffect(() => {
		locked.forEach((row, y) => {
			row.forEach((locked, x) => {
				drawRef.current.lock(x, y, locked);
			});
		});
		drawRef.current.render();
	}, [locked]);
	return <div {...props} className="grid" ref={ref} />;
}
