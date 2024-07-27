import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HOME_NAV_LINKS = [
	{
		name: 'Friends',
		link: '/friends',
	},
	{
		name: 'Following',
		link: '/following',
	},
	{
		name: 'For you',
		link: '/',
	},
]

export default function Navigation() {
	return (
		<div className='absolute w-full top-0 flex justify-center'>
			<ul className='flex gap-3 mt-1'>
				{HOME_NAV_LINKS.map(({ name, link }, index) => (
					<li key={index}>
						<Link to={link}>{name}</Link>
					</li>
				))}
			</ul>
			<div className='absolute top-2 right-2'>
				<FaSearch />
			</div>
		</div>
	)
}
