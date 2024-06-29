import { FC } from 'react'
import './Credits.scss'
import { credits } from '../../utils/credits'

const Credits: FC = () => {
	return (
		<section className='credits'>
			<ul className='credits__content content'>
				{credits.map(credit => (
					<li key={credit.id}>
						<span>{credit.title}</span>
						<p>{credit.text}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Credits
