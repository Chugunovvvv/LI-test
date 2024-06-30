import { FC } from 'react'
import Header from '../Header/Header'
import Button from '../UI/Button/Button'
import bg from '/public/main/bg.jpg'
import './Home.scss'

const Home: FC = () => {
	return (
		<div className='hero' style={{ backgroundImage: bg }}>
			<Header />
			<section className='main content'>
				<div className='main__content'>
					<h1 className='main__title'>
						Говорят, никогда не поздно сменить профессию
					</h1>
					<p className='main__subtitle'>
						Сделай круто тестовое задание и у тебя получится
					</p>
					<Button text='Проще простого' className='main__button' />
				</div>
			</section>
		</div>
	)
}

export default Home
