import Image from 'next/image'
import beDigital from '@/assets/bemol-digital.png'

export default function SignUp() {
	return (
		<main className="min-h-screen grid grid-cols-1">
			<aside className="bg-primary pl-16 pr-10 lg:flex flex-col gap-8 justify-center items-start">
				<Image src={beDigital} alt="Bemol digital logo" className="w-80" />
				<h2 className="text-white ml-6 text-4xl">
					Parabéns! Agora você é um <span className='font-bold bg-secondary py-1 px-2'>#BeDigital</span>
				</h2>
			</aside>
		</main>
	)
}
