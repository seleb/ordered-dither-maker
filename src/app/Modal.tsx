import dialogPolyfill from 'dialog-polyfill';
import { createPortal } from 'preact/compat';
import { useEffect, useRef } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';

export function Modal({ children, close, ...props }: JSXInternal.HTMLAttributes<HTMLDialogElement> & { close: () => void }) {
	const ref = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		const dialog = ref.current;
		if (!dialog) return;
		dialogPolyfill.registerDialog(dialog);
		dialog.showModal();
		dialog.addEventListener('close', close);
	}, [close]);
	return createPortal(
		<dialog ref={ref} aria-modal {...props}>
			{children}
		</dialog>,
		document.body
	);
}
