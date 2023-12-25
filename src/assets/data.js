import Hotel from '@/components/icons/Hotel.vue';
import House from '@/components/icons/House.vue';
import Motorbike from '@/components/icons/Motorbike.vue';
import Child from '@/components/icons/Child.vue';
import Beach from '@/components/icons/Beach.vue';
import Heart from '@/components/icons/Heart.vue';
import Airplane from '@/components/icons/Airplane.vue';
import hostel1 from '@/assets/images/hostel1.jpeg';
import hostel2 from '@/assets/images/hostel2.jpeg';
import hostel3 from '@/assets/images/hostel3.jpeg';
import hostel4 from '@/assets/images/hostel4.jpeg';
import leisure_entertainment1 from '@/assets/images/leisure_entertainment1.png';
import leisure_entertainment2 from '@/assets/images/leisure_entertainment2.jpeg';
import leisure_entertainment3 from '@/assets/images/leisure_entertainment3.jpeg';
import leisure_entertainment4 from '@/assets/images/leisure_entertainment4.jpeg';
import recreation_center1 from '@/assets/images/recreation_center1.jpeg';
import recreation_center2 from '@/assets/images/recreation_center2.jpeg';
import recreation_center3 from '@/assets/images/recreation_center3.jpeg';
import recreation_center4 from '@/assets/images/recreation_center4.jpeg';
import tour1 from '@/assets/images/tour1.jpeg';
import tour2 from '@/assets/images/tour2.jpeg';
import tour3 from '@/assets/images/tour3.jpeg';
import tour4 from '@/assets/images/tour4.jpeg';
import blog1 from '@/assets/images/blog1.jpeg';
import blog2 from '@/assets/images/blog2.jpeg';
import blog3 from '@/assets/images/blog3.jpeg';
import blog4 from '@/assets/images/blog4.jpeg';
import blog5 from '@/assets/images/blog5.jpeg';
import blog6 from '@/assets/images/blog6.jpeg';

export const cities = ['Алматы', 'Астана', 'Алаколь', 'Боровое', 'Сарыагаш'];

export const categories = [
	{
		text: 'Хостелы',
		icon: Hotel,
		color: '#E0EDFF'
	}, {
		text: 'Базы отдыха',
		icon: House,
		color: '#E6FFD0'
	}, {
		text: 'Активный отдых',
		icon: Motorbike,
		color: '#FFE9C8'
	}, {
		text: 'Детские лагеря',
		icon: Child,
		color: '#FED7FF'
	}, {
		text: 'Туры',
		icon: Beach,
		color: '#FFF7DC'
	}, {
		text: 'Оздоровительный отдых',
		icon: Heart,
		color: '#FFECEC'
	}, {
		text: 'Транспорт',
		icon: Airplane,
		color: '#B6C1FF'
	}
];

export const hostels = [
	{
		name: 'Grand hostel',
		image: hostel1,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.6
	}, {
		name: 'Owl hostel',
		image: hostel2,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 6
	}, {
		name: 'Камелот',
		image: hostel3,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.9
	}, {
		name: 'Барыс хостел',
		image: hostel4,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.4
	}
];

export const tours = [
	{
		name: 'Кольсайские озёра и озеро Каинды за 1 день',
		image: tour1,
		location: 'Алматинская обл.',
		price: 21000,
		rating: 9.4
	}, {
		name: 'Сплав по реке Или',
		image: tour2,
		location: 'Алматинская обл.',
		price: 5600,
		rating: 8
	}, {
		name: 'Река Тургень',
		image: tour3,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.0
	}, {
		name: 'Поющие барханы',
		image: tour4,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.1
	}
];

export const recreation_centers = [
	{
		name: 'База семейного отдыха Тургенская дача',
		image: recreation_center1,
		location: 'Алматинская обл.',
		price: 17000,
		rating: 9.4
	}, {
		name: 'Армарис хостел',
		image: recreation_center2,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.6
	}, {
		name: 'Досжан зона отдыха',
		image: recreation_center3,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.0
	}, {
		name: 'Зона отдыха Оазис',
		image: recreation_center4,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.1
	}
];

export const leisure_entertainments = [
	{
		name: 'Роуп-джампинг в Алматы',
		image: leisure_entertainment1,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.4
	}, {
		name: 'Армарис хостел',
		image: leisure_entertainment2,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.6
	}, {
		name: 'Досжан зона отдыха',
		image: leisure_entertainment3,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.0
	}, {
		name: 'Зона отдыха Оазис',
		image: leisure_entertainment4,
		location: 'Алматинская обл.',
		price: 2500,
		rating: 9.1
	}
];

export const reviews = [
	{
		name: 'Хостел Арлеон',
		text: 'Нет слов, чтобы описать. Одно из лучших мест, в котором я когда-либо останавливался... и лучшие хозяева, которых я когда-либо встречал...',
		rating: 9.6,
		author: 'Емиль Газизов',
		date: '10.11.2023',
		time: '14:56'
	}, {
		name: 'Зона отдыха Оазис',
		text: 'Нет слов, чтобы описать. Одно из лучших мест, в котором я когда-либо останавливался... и лучшие хозяева, которых я когда-либо встречал...',
		rating: 8.1,
		author: 'Матвей Радужнев',
		date: '10.11.2023',
		time: '14:56'
	}, {
		name: 'Хостел Арион',
		text: 'Нет слов, чтобы описать. Одно из лучших мест, в котором я когда-либо останавливался... и лучшие хозяева, которых я когда-либо встречал...',
		rating: 9.6,
		author: 'Амир Ванев',
		date: '10.11.2023',
		time: '14:56'
	}
];

export const about = [
	{
		title: 'Удобная навигация, яркий дизайн и информативный контент:',
		text: 'Удобная навигация, яркий дизайн и информативный контент: Интуитивно понятный интерфейс сайта или приложения, привлекательный дизайн, который облегчает поиск информации. Информативный контент описывает объекты размещения подробно, включая фотографии, услуги, расположение и преимущества.',
		background: '#FFE2E2',
		color: '#CE5353'
	}, {
		title: 'Онлайн поддержка:',
		text: 'Удобная навигация, яркий дизайн и информативный контент: Интуитивно понятный интерфейс сайта или приложения, привлекательный дизайн, который облегчает поиск информации. Информативный контент описывает объекты размещения подробно, включая фотографии, услуги, расположение и преимущества.',
		background: '#FBFFDF',
		color: '#F90'
	}, {
		title: 'Отзывы и рейтинги:',
		text: 'Удобная навигация, яркий дизайн и информативный контент: Интуитивно понятный интерфейс сайта или приложения, привлекательный дизайн, который облегчает поиск информации. Информативный контент описывает объекты размещения подробно, включая фотографии, услуги, расположение и преимущества.',
		background: '#DBE3FF',
		color: '#3561FD'
	}, {
		title: 'Широкий выбор:',
		text: 'Удобная навигация, яркий дизайн и информативный контент: Интуитивно понятный интерфейс сайта или приложения, привлекательный дизайн, который облегчает поиск информации. Информативный контент описывает объекты размещения подробно, включая фотографии, услуги, расположение и преимущества.',
		background: '#CEFFB7',
		color: '#319900'
	}
];

export const blogs = [
	{
		id: 1,
		title: 'Отдохни сегодня - заплати завтра: туры в кредит под 1%',
		image: blog1,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '12.05.2023'
	}, {
		id: 2,
		title: 'Канада: бесплатные обзорные экскурсии',
		image: blog2,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '23.12.2023'
	}, {
		id: 3,
		title: 'Иордания: романтический ужин в подарок от отеля Movenpick Resort&Spa',
		image: blog3,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '12.05.2023'
	}, {
		id: 4,
		title: 'Отдохни сегодня - заплати завтра: туры в кредит под 1%',
		image: blog4,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '12.05.2023'
	}, {
		id: 5,
		title: 'Канада: бесплатные обзорные экскурсии',
		image: blog5,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '23.12.2023'
	}, {
		id: 6,
		title: 'Иордания: романтический ужин в подарок от отеля Movenpick Resort&Spa',
		image: blog6,
		text: 'Хочется поехать на отдых прямо сейчас? Есть решение: тур в кредит с минимальной переплатой.<br />У вас есть возможность увидеть вживую великие пирамиды Египта, понежиться в теплых лучах солнца в Гоа, отведать экзотических фруктов в Таиланде.<br />Кредит можно оформлять на любое направление. Это намного дешевле чем если бы вы взяли денежный кредит на поездку!',
		date: '12.05.2023'
	}
];
