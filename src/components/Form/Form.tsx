import { FC } from 'react'
import './Form.scss'
import Button from '../UI/Button/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IInputs {
	name: string
	phone: string
	checked: boolean
}

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IInputs>()

	const onSubmit: SubmitHandler<IInputs> = async data => {
		console.log(data)

		try {
			const response = await fetch('https://test-api.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const result = await response.json()
			console.log('Success:', result)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<section id='form' className='form content'>
			<div className='form__container content'>
				<h1 className='form__title title'>Отправь форму</h1>
				<form action='' onSubmit={handleSubmit(onSubmit)}>
					<div className='form__inputs'>
						<div className='form__input'>
							<img
								src='./cancel.svg'
								alt='Ошибка ввода'
								className={`${errors.name ? 'cancel__error' : 'cancel'}`}
							/>
							<input
								placeholder='Имя'
								className={`input ${errors.name ? 'error' : ''}`}
								{...register('name', {
									required: 'Поле обязательно к заполнению',
								})}
							/>
							{errors.name && (
								<span style={{ color: 'red' }}>{errors.name.message}</span>
							)}
						</div>
						<div className='form__input'>
							<img
								src='./cancel.svg'
								alt='Ошибка ввода'
								className={`${errors.phone ? 'cancel__error' : 'cancel'}`}
							/>
							<input
								placeholder='Телефон'
								type='tel'
								className={`input ${errors.phone ? 'error' : ''}`}
								{...register('phone', {
									required: 'Телефон обязателен к заполнению',
									pattern: {
										value: /^[0-9]{10,}$/,
										message: 'Введите корректный номер телефона',
									},
								})}
							/>
							{errors.phone && (
								<span style={{ color: 'red' }}>{errors.phone.message}</span>
							)}
						</div>
					</div>
					<div className='form__confirm'>
						<div className='inputAgree'>
							<label>
								<input
									required={true}
									type='checkbox'
									{...register('checked')}
								/>
								<span>Согласен, отказываюсь</span>
							</label>
						</div>
						<Button text='Отправить' className='send__button' type='submit' />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Form
