import { Route, Routes } from 'react-router-dom'
// import { lazy } from 'react'
// import SuspenseLoader from '../../../../components/SuspenseLoader'

import Navigation from './components/Navigation'
import SideBar from './components/SideBar'
import Info from './components/Info'

import ForYou from './pages/ForYou'
import Following from './pages/Following'
import Friends from './pages/Friends'
import NotFound from '../../../../components/NotFound'

// const ForYou = lazy(() => import('./pages/ForYou'))
// const Following = lazy(() => import('./pages/Following'))
// const Friends = lazy(() => import('./pages/Friends'))
// const NotFound = lazy(() => import('../../../../components/NotFound'))

export default function Vids() {
	return (
		<div className='relative flex-1 flex justify-center items-center'>
			<Navigation />
			<SideBar />
			<Info />
			<Routes>
				<Route path='/' element={<ForYou />} />
				<Route path='/following' element={<Following />} />
				<Route path='/friends' element={<Friends />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
