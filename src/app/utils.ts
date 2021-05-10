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

export function useRange(set: (value: number) => void) {
	return useCallback(
		(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
			set(parseFloat(event.currentTarget.value));
		},
		[set]
	);
}

export function useInt(set: (value: number) => void) {
	return useCallback(
		(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
			const min = event.currentTarget.min;
			const max = event.currentTarget.max;
			let value = parseInt(event.currentTarget.value, 10);
			if (min !== '') {
				value = Math.max(parseInt(min, 10), value);
			}
			if (max !== '') {
				value = Math.min(parseInt(max, 10), value);
			}
			set(value);
		},
		[set]
	);
}
