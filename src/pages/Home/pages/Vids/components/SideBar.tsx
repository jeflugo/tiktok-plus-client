import { AiFillMessage } from 'react-icons/ai'
import { FaHeart, FaStar } from 'react-icons/fa'
import { RiShareForwardFill } from 'react-icons/ri'

export default function SideBar() {
	return (
		<div className='absolute	bottom-2 right-2 flex flex-col gap-2 justify-center items-center'>
			<div className='w-8 h-8 border-2 border-white rounded-full'></div>
			<FaHeart size={25} />
			<AiFillMessage size={25} />
			<FaStar size={25} />
			<RiShareForwardFill size={25} />
			<div className='w-6 h-6 border-2 border-white rounded-full'></div>
		</div>
	)
}
