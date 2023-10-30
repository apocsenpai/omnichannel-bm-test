interface StepProps {
	step: boolean;
}

export default function Step({ step }: StepProps) {
	return (
		<div className="h-16 w-[max(60%,_16rem)] flex justify-between relative">
			<div
				className={`p-1 flex justify-center items-center text-2xl
							w-16 h-16 rounded-full border-4 border-primary ${
								step ? 'bg-white' : 'bg-primary'
							}`}
			>
				<span
					className={`flex w-full h-full justify-center items-center rounded-full bg-primary text-white`}
				>
					1
				</span>
				{step && (
					<span className="absolute top-16 text-center text-base w-40 text-primary">
						Dados de usuário
					</span>
				)}
			</div>
			<div
				className={`top-6 left-[3.75rem] w-[calc(100%-7.5rem)] h-4 absolute
				border-y-4 border-y-primary bg-white py-[0.1225rem]`}
			>
				{!step && <div className={`h-full w-[calc(100%+1rem)] bg-primary`}></div>}
			</div>
			<div
				className={`p-1 flex justify-center items-center text-2xl
							w-16 h-16 rounded-full border-4 ${'border-primary bg-white'}`}
			>
				<span
					className={`flex w-full h-full justify-center items-center rounded-full  ${
						step ? 'text-primary' : 'text-white bg-primary'
					}`}
				>
					2
				</span>
				{!step && (
					<span className="absolute top-16 text-center text-base w-40 text-primary">
						Dados pessoais
					</span>
				)}
			</div>
		</div>
	)
}
