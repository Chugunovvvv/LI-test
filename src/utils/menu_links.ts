interface IMenuLinks {
	id: number
	name: string
	href: string
}

export const menu_links: IMenuLinks[] = [
	{
		id: 1,
		name: 'Как это работает',
		href: '#work',
	},
	{
		id: 2,
		name: '3-й блок',
		href: '#block',
	},
	{
		id: 3,
		name: 'Вопросы и ответы',
		href: '#questions',
	},
	{
		id: 4,
		name: 'Форма',
		href: '#form',
	},
]
