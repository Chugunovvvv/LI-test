import { FC } from 'react'
import './Header.scss'
import { menu_links } from '../../utils/menu_links'
import MobileButton from '../UI/MobileButton/MobileButton'
import useMobileButton from '../../hooks/useMobileButton'

const Header: FC = () => {
	const { handleCloseMenu, handleToggleOpenMenu, active } = useMobileButton()
	return (
		<header className='header content'>
			<a href='' className='header__logo'>
				<img
					src={active ? './logo-black.svg' : './logo.svg'}
					alt='Логотип Лаборатории интернет'
				/>
			</a>
			<nav className={active ? 'header__nav active' : 'header__nav'}>
				<ul className='header__list'>
					{menu_links.map(link => (
						<li
							className='header__list-item'
							key={link.id}
							onClick={handleCloseMenu}
						>
							<a href={link.href} className='header__list-link'>
								{link.name}
							</a>

							<div
								className={
									active ? 'header__list-img active' : 'header__list-img'
								}
							>
								<img
									src={'./header/arrow.svg'}
									alt='стрелка развернуть пункт'
								/>
							</div>
						</li>
					))}
				</ul>
			</nav>
			<MobileButton onClick={handleToggleOpenMenu} active={active} />
		</header>
	)
}

export default Header
