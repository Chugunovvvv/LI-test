import { ChangeEvent, useState } from 'react'
import { IInitialState } from '../types/types'

interface IUseForm {
	initialState: IInitialState
}

const useForms = ({ initialState }: IUseForm) => {
	const [formData, setFormData] = useState<IInitialState>(initialState)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, type, value, checked } = e.target as HTMLInputElement

		const newValue = type === 'checkbox' ? checked : value
		setFormData(prevState => ({
			...prevState,
			[name]: newValue,
		}))
	}

	const resetForm = () => {
		setFormData(initialState)
	}
	return {
		handleChange,
		formData,
		resetForm,
	}
}

export default useForms
