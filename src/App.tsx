import { FC } from 'react'
import './styles/global.scss'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Block from './components/Block/Block'
import Reviews from './components/Reviews/Reviews'
import Answer from './components/Answer/Answer'
import Credits from './components/Credits/Credits'
import Form from './components/Form/Form'
import Home from './components/Home/Home'

const App: FC = () => {
	return (
		<div className='wrapper'>
			<Home />
			<main className='main'>
				<Work />
				<Block />
				<Reviews />
				<Answer />
				<Credits />
				<Form />
			</main>
			<Footer />
		</div>
	)
}

export default App
