import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility function to add Tailwind classes conditionally */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
