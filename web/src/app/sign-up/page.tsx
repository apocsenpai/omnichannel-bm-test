import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

export default function SignUp() {
	return (
		<main className="min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_1fr] ">
			<LeftSide />
			<RightSide />
		</main>
	)
}
