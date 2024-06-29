import { FC } from 'react'
import './Answer.scss'
import { answer_question } from '../../utils/answer'
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer'

const Answer: FC = () => {
	return (
		<section id='questions' className='answer__wrap content'>
			<h1 className='answer__title title'>Вопросы и ответы</h1>
			<div className='answer__content'>
				{answer_question.map(el => (
					<QuestionAnswer
						question={el.question}
						answer={el.answer}
						key={el.id}
					/>
				))}
			</div>
		</section>
	)
}

export default Answer
