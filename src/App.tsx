import { Route, Routes } from 'react-router-dom'
// import { lazy } from 'react'

import Home from './pages/Home'
import Search from './pages/Search'
import Settings from './pages/Settings'

// const Home = lazy(() => import('./pages/Home'))
// const Search = lazy(() => import('./pages/Search'))
// const Settings = lazy(() => import('./pages/Settings'))

export default function App() {
	return (
		<div className='mx-auto max-w-md'>
			<div className='min-h-screen flex flex-col'>
				<Routes>
					<Route path='/*' element={<Home />} />
					<Route path='/search/*' element={<Search />} />
					<Route path='/settings/*' element={<Settings />} />
				</Routes>
			</div>
		</div>
	)
}
