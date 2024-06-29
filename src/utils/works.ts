interface IWork {
	id: number
	name: string
	text: string
	img: string
	alt: string
}

export const works: IWork[] = [
	{
		id: 1,
		name: 'Прочитай задание внимательно',
		text: 'Думаю у тебя не займет это больше двух-трех минут',
		img: './work/waiting.svg',
		alt: 'прочитай внимательно',
	},
	{
		id: 2,
		name: 'Изучи весь макет заранее',
		text: 'Подумай как это будет работать на разных разрешениях и при скролле',
		img: './work/delivery-truck.svg',
		alt: 'изучи весь макет заранее',
	},
	{
		id: 3,
		name: 'Сделай хорошо',
		text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
		img: './work/secure.svg',
		alt: 'сделай хорошо',
	},
	{
		id: 4,
		name: 'Получи предложение',
		text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
		img: './work/money-bags.svg',
		alt: 'получи предложение',
	},
]
