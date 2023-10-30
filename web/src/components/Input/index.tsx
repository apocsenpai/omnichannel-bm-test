import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string | undefined;
}

export default function Input(props: InputProps) {
	return (
		<div className="mb-2">
			<label
				className={`text-xl font-bold ${props.error && 'text-secondary'}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<input
				className={`
						w-full h-12 text-xl rounded-md mt-1 pl-4 border
						focus:outline-none
						read-only:placeholder:italic read-only:bg-zinc-200 read-only:hover:cursor-not-allowed
						${props.error ? 'border-secondary' : 'border-primary focus:border-alternative'}
				`}
				{...props}
			/>
			{props.error && (
				<span className="text-xs text-secondary italic">{props.error}</span>
			)}
		</div>
	)
}
