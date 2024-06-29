import { FC } from 'react'
import './WorkItem.scss'

interface IWorkItem {
	img: string
	alt: string
	name: string
	text: string
}

const WorkItem: FC<IWorkItem> = ({ img, alt, name, text }) => {
	return (
		<div className='work-item'>
			<div className='work-item__img'>
				<img src={img} alt={alt} />
			</div>
			<h2 className='work-item__title'>{name}</h2>
			<p className='work-item__text'>{text}</p>
		</div>
	)
}

export default WorkItem
