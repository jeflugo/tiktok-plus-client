import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import SuspenseLoader from '../../../../components/SuspenseLoader'
import Navigation from './components/Navigation'

const ForYou = lazy(() => import('./pages/ForYou'))
const Following = lazy(() => import('./pages/Following'))
const Friends = lazy(() => import('./pages/Friends'))
const NotFound = lazy(() => import('../../../../components/NotFound'))

export default function Home() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route
					path='/'
					element={
						<SuspenseLoader>
							<ForYou />
						</SuspenseLoader>
					}
				/>
				<Route
					path='/following'
					element={
						<SuspenseLoader>
							<Following />
						</SuspenseLoader>
					}
				/>
				<Route
					path='/friends'
					element={
						<SuspenseLoader>
							<Friends />
						</SuspenseLoader>
					}
				/>
				<Route
					path='*'
					element={
						<SuspenseLoader>
							<NotFound />
						</SuspenseLoader>
					}
				/>
			</Routes>
		</>
	)
}
