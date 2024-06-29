import { FC } from 'react'
import './SwiperItem.scss'

interface ISwiperItem {
	img: string
	alt: string
	name: string
	city: string
	text: string
}

const SwiperItem: FC<ISwiperItem> = ({ img, alt, name, city, text }) => {
	return (
		<div className='swiper-item'>
			<div className='swiper-item__header'>
				<div className='swiper-item__header-img'>
					<img src={img} alt={alt} />
				</div>
				<div className='swiper-item__header-info'>
					<div className='swiper-item__header-person'>
						<h3 className='swiper-item__header-person-name'>{name}</h3>
						<div className='swiper-item__header-person-city'>{city}</div>
					</div>
				</div>
			</div>
			<div className='swiper-item__content'>
				<p className='swiper-item__text'>{text}</p>
			</div>
		</div>
	)
}

export default SwiperItem
