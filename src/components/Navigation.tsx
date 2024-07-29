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
		Icon: FaSearch,
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
					{NAVIGATION_LINKS.map(({ name, Icon, link }) => {
						if (name === 'Create')
							return (
								<div>
									<Link to={link}>
										<div className='relative'>
											<div className='h-6 w-9 absolute bg-blue-400 top-0 left-0 ml-[-5px] rounded' />
											<div className='bg-white text-black w-9 rounded font-bold relative h-6 z-10'>
												<div className='absolute top-[-2px] w-full text-center'>
													+
												</div>
											</div>
											<div className='h-6 w-9 absolute bg-red-500  top-0 right-0 mr-[-5px] rounded' />
										</div>
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
