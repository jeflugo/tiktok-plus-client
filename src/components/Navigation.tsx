import { useState } from 'react'
import { IconType } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { BiChevronRight, BiMessageAlt, BiUser } from 'react-icons/bi'
import { BsSearchHeartFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type TLink = {
	name: string
	Icon: IconType
	link: string
}

const NAVIGATION_LINKS: TLink[] = [
	{
		name: 'Home',
		Icon: AiFillHome,
		link: '/',
	},
	{
		name: 'Explore',
		Icon: BsSearchHeartFill,
		link: '/explore',
	},
	{
		name: 'Create',
		Icon: BsSearchHeartFill,
		link: '/create',
	},
	{
		name: 'Inbox',
		Icon: BiMessageAlt,
		link: '/inbox',
	},
	{
		name: 'Profile',
		Icon: BiUser,
		link: '/profile',
	},
]

export default function Navigation() {
	const [search] = useState(true)
	return (
		<div>
			{search && (
				<div className='bg-black/95 px-2 py-1 text-white'>
					<div className='flex justify-between items-center'>
						<div className='flex gap-1 items-center'>
							<FaSearch />
							<span>Search - asdasd</span>
						</div>
						<BiChevronRight />
					</div>
				</div>
			)}
			<div className='border-t-2 border-white bg-black text-white py-2'>
				<div className='flex justify-evenly items-center'>
					{NAVIGATION_LINKS.map(({ name, Icon, link }, index) => {
						if (index === 2)
							return (
								<div>
									<Link to={link}>
										<Icon />
									</Link>
								</div>
							)
						return (
							<div className='flex flex-col justify-center items-center'>
								<Link to={link}>
									<Icon />
								</Link>
								<h4>{name}</h4>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
