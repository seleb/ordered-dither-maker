import { useCallback } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';


export function useCheckbox(set: (checked: boolean) => void) {
	return useCallback(
		(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
			set(event.currentTarget.checked);
		},
		[set]
	);
}

function sanitizeInput({
	value,
	min,
	max,
	step,
}: HTMLInputElement) {
	if (value === '') return;
	let v = parseFloat(value);
	if (min !== '') {
		v = Math.max(parseFloat(min), v);
	}
	if (max !== '') {
		v = Math.min(parseFloat(max), v);
	}
	if (step !== '') {
		v -= v % parseFloat(step);
	}
	return v;
}

export function useRange(set: (value: number) => void) {
	return useCallback(
		(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
			const valueRaw = parseFloat(event.currentTarget.value);
			const value = sanitizeInput(event.currentTarget);
			if (value === undefined) return;
			if (value !== valueRaw) {
				event.currentTarget.value = value.toString(10);
			}
			set(value);
		},
		[set]
	);
}

export function useInt(set: (value: number) => void) {
	return useCallback(
		(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
			const valueRaw = parseFloat(event.currentTarget.value);
			const value = sanitizeInput(event.currentTarget);
			if (value === undefined) return;
			if (value !== valueRaw) {
				event.currentTarget.value = value.toString(10);
			}
			set(value);
		},
		[set]
	);
}
