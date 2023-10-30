import Image from 'next/image'
import beDigital from '@/assets/bemol-digital.png'

export default function LeftSide() {
	return (
		<aside className="bg-primary pl-16 pr-10 lg:flex flex-col gap-6 justify-center items-start relative hidden">
			<Image src={beDigital} alt="Bemol digital logo" />
			<h1 className="max-w-[70%] text-white text-7xl ml-6 bg-secondary px-4">
				Criar, Inovar e Transformar
			</h1>
			<h2 className="text-white text-4xl font-bold absolute bottom-4 right-8">
				Venha ser #BeDigital
			</h2>
		</aside>
	)
}
