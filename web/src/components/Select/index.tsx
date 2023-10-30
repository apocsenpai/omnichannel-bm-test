import { SelectHTMLAttributes } from 'react'

import GENDER from '@/utils/constants/genders'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	error?: string;
}

export default function Select(props: SelectProps) {
	return (
		<div className="mb-2">
			<label
				className={`text-xl font-bold ${props.error && 'text-secondary'}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<select
				className={`
						w-full h-12 text-xl rounded-md mt-1 px-4 border
						focus:outline-none
						bg-white
						${props.error ? 'border-secondary' : 'border-primary focus:border-alternative'}
				`}
				{...props}
			>
				<option value="">Selecione</option>
				{Object.keys(GENDER).map((key)=><option key={key} value={key}>{GENDER[key]}</option>)}
			</select>
			{props.error && (
				<span className="text-xs text-secondary italic">{props.error}</span>
			)}
		</div>
	)
}
