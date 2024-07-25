import { Route, Routes } from 'react-router-dom'
import SuspenseLoader from '../../components/SuspenseLoader'
import { lazy } from 'react'
import Navigation from '../../components/Navigation'

const Vids = lazy(() => import('./pages/Vids'))
const Explore = lazy(() => import('./pages/Explore'))
const Inbox = lazy(() => import('./pages/Inbox'))
const Profile = lazy(() => import('./pages/Profile'))

export default function Home() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<SuspenseLoader children={<Vids />} />} />
				<Route
					path='/explore/*'
					element={<SuspenseLoader children={<Explore />} />}
				/>
				<Route
					path='/inbox/*'
					element={<SuspenseLoader children={<Inbox />} />}
				/>
				<Route
					path='/profile/*'
					element={<SuspenseLoader children={<Profile />} />}
				/>
			</Routes>
			<Navigation />
		</>
	)
}
