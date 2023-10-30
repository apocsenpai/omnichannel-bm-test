import beDigitalLogo from '@/assets/bemol-digital-logo.jpeg'
import Image from 'next/image'
import FormWrapper from './FormWrapper'

export default function RightSide() {
	return (
		<aside className="flex flex-col items-center p-6 sm:p-20 md:p-40 lg:p-8 xl:p-16">
			<Image
				src={beDigitalLogo}
				alt="Logo Bemol Digital"
				className="rounded-2xl w-28 shadow-lg mb-10"
			/>
			<h1 className="text-primary font-bold text-4xl self-start mb-6">
				Registre-se
			</h1>
			<FormWrapper />
		</aside>
	)
}
