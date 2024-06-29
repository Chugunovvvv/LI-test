import { FC } from 'react'
import './Button.scss'
interface IButton {
	className: string
	text: string
	disabled?: boolean
	type?: 'submit' | 'reset' | 'button' | undefined
}

const Button: FC<IButton> = ({ className, text, disabled, type }) => {
	return (
		<button type={type} className={`button ${className}`} disabled={disabled}>
			{text}
		</button>
	)
}

export default Button
