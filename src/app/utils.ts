import { useCallback } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';


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
			set(parseInt(event.currentTarget.value, 10));
		},
		[set]
	);
}
