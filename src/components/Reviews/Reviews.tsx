import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './Reviews.scss'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import { swiper_content } from '../../utils/swiper_content'
import SwiperItem from '../SwiperItem/SwiperItem'

const Reviews: FC = () => {
	return (
		<section className='reviews'>
			<h1 className='reviews__title title'>Отзывы</h1>
			<div className='reviews__content content'>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 5000 }}
					navigation={{
						nextEl: '.custom-next',
						prevEl: '.custom-prev',
					}}
					breakpoints={{
						767: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1600: {
							slidesPerView: 4,
						},
					}}
					pagination={{
						el: '.slider__pagination',
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
				>
					{swiper_content.map(swiper => (
						<SwiperSlide className='swiper-wrap' key={swiper.id}>
							<SwiperItem
								name={swiper.name}
								img={swiper.img}
								alt={swiper.alt}
								city={swiper.city}
								text={swiper.text}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='custom-next custom-navigation-button'></div>
				<div className='custom-prev custom-navigation-button'></div>
				<div className='slider__pagination'></div>
			</div>
		</section>
	)
}

export default Reviews
