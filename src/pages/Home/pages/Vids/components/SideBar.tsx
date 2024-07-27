import { BiHeart, BiTag } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa6'
import { RiShareForwardLine } from 'react-icons/ri'

export default function SideBar() {
	return (
		<div className='absolute	bottom-2 right-2 flex flex-col gap-2 justify-center items-center'>
			<div className='w-8 h-8 border-2 border-white rounded-full'></div>
			<BiHeart size={27} />
			<FaRegCommentDots size={27} />
			<BiTag size={27} />
			<RiShareForwardLine size={27} />
			<div className='w-6 h-6 border-2 border-white rounded-full'></div>
		</div>
	)
}
