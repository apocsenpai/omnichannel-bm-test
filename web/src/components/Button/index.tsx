import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
	return (
		<button
			className="bg-primary text-white text-2xl h-12 mt-5 rounded-md hover:bg-alternative transition-all"
			{...props}
		>
			{props.children}
		</button>
	)
}
