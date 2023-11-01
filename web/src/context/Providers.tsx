'use client'

import { ReactNode } from 'react'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<ToastContainer
				position="top-right"
				autoClose={1500}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	)
}
