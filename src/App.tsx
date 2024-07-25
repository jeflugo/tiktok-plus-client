import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const Settings = lazy(() => import('./pages/Settings'))

export default function App() {
	return (
		<div className='mx-auto max-w-md'>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/search/*' element={<Search />} />
				<Route path='/settings/*' element={<Settings />} />
			</Routes>
		</div>
	)
}
