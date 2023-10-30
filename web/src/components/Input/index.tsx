import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function Input(props: InputProps) {
	return (
		<div>
			<label className="text-xl font-bold" htmlFor={props.name}>
				{props.label}
			</label>
			<input
				className="w-full h-12 text-xl rounded-md mt-1 pl-4 border border-primary focus:border-alternative focus:outline-none"
				{...props}
			/>
		</div>
	)
}
