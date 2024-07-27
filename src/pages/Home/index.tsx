import { Route, Routes } from 'react-router-dom'
// import { lazy } from 'react'
// import SuspenseLoader from '../../components/SuspenseLoader'
import Navigation from '../../components/Navigation'

import Vids from './pages/Vids'
import Explore from './pages/Explore'
import Inbox from './pages/Inbox'
import Profile from './pages/Profile'

// const Vids = lazy(() => import('./pages/Vids'))
// const Explore = lazy(() => import('./pages/Explore'))
// const Inbox = lazy(() => import('./pages/Inbox'))
// const Profile = lazy(() => import('./pages/Profile'))

export default function Home() {
	return (
		<>
			<main className='flex-1 flex bg-black text-white'>
				<Routes>
					<Route path='/*' element={<Vids />} />
					<Route path='/explore/*' element={<Explore />} />
					<Route path='/inbox/*' element={<Inbox />} />
					<Route path='/profile/*' element={<Profile />} />
				</Routes>
			</main>
			<Navigation />
		</>
	)
}
