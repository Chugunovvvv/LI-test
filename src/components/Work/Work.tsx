import { FC } from 'react'
import './Work.scss'
import { works } from '../../utils/works'
import WorkItem from '../WorkItem/WorkItem'

const Work: FC = () => {
	return (
		<section id='work' className='work content'>
			<h1 className='work__title title'>Как это работает?</h1>
			<div className='work__content'>
				{works.map(work => (
					<WorkItem
						name={work.name}
						img={work.img}
						alt={work.alt}
						key={work.id}
						text={work.text}
					/>
				))}
			</div>
		</section>
	)
}

export default Work
