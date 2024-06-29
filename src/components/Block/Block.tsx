import { FC } from 'react'
import './Block.scss'

const Block: FC = () => {
	return (
		<section id='block' className='block content'>
			<div className='block__content'>
				<div className='block__content-info'>
					<h2 className='block__content-title'>
						Круто, ты дошел то третьего блока
					</h2>
					<div className='block__content-paragraphs'>
						<p className='block__content-text'>
							63% опрошенных пользовались кредитами из-за того, что не могли
							покрыть непредвиденные расходы свыше 15 000 ₽.
						</p>
						<p className='block__content-text'>
							Доступ к заработанным деньгам помогает отказаться от кредитов и
							экономить деньги на процентах и штрафах.
						</p>
					</div>
				</div>
				<div className='block__content-img'>
					<img src='./block/bg.png' alt='Задний фон' />
				</div>
			</div>
		</section>
	)
}

export default Block
