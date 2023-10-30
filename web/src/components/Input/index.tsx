import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function Input(props: InputProps) {
	return (
		<div className="mb-2">
			<label className="text-xl font-bold" htmlFor={props.name}>
				{props.label}
			</label>
			<input
				className="w-full h-12 text-xl rounded-md mt-1 pl-4 border border-primary
						focus:border-alternative focus:outline-none
						read-only:placeholder:italic read-only:bg-zinc-200 read-only:hover:cursor-not-allowed"
				{...props}
			/>
		</div>
	)
}
