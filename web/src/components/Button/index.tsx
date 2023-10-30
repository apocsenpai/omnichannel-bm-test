import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: boolean;
}

export default function Button(props: ButtonProps) {
	return (
		<button
			className={`text-2xl h-12 mt-2 rounded-md  border  transition-all ${
				props.variant
					? 'border-primary text-primary hover:bg-secondary hover:border-secondary'
					: 'bg-primary text-white hover:bg-alternative'
			} `}
			{...props}
		>
			{props.children}
		</button>
	)
}
