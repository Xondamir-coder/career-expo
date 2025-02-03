<template>
	<section class="events">
		<HomeSectionHeader
			label="Upcoming events"
			text="Expo Career – bu yirik ish yarmarkasi bo‘lib, O‘zbekiston va xorijdagi nufuzli
				kompaniyalarni bir maydonga jamlaydi. Biz tajribali">
			Expo Careerda sizning <span class="clr-primary">Kelajagingiz</span> Boshlanadi!
		</HomeSectionHeader>
		<swiper-container class="events__slider" ref="swiperRef" :init="false">
			<swiper-slide class="events__slide" v-for="(card, i) in cards" :key="i">
				<HomeEventsCard :data="card" />
			</swiper-slide>
		</swiper-container>
	</section>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '~/assets/images/events-1.jpg';
import img2 from '~/assets/images/events-2.jpg';
import img3 from '~/assets/images/events-3.jpg';
import img4 from '~/assets/images/events-4.jpg';
import img5 from '~/assets/images/events-5.jpg';

const cards = [
	{
		img: img1,
		title: 'Aqlli shaharlar va moliyaviy integratsiya haqida global',
		date: new Date().toISOString()
	},
	{
		img: img2,
		title: 'Aqlli shaharlar va moliyaviy integratsiya haqida global',
		date: new Date().toISOString()
	},
	{
		img: img3,
		title: 'Aqlli shaharlar va moliyaviy integratsiya haqida global',
		date: new Date().toISOString()
	},
	{
		img: img4,
		title: 'Aqlli shaharlar va moliyaviy integratsiya haqida global',
		date: new Date().toISOString()
	},
	{
		img: img5,
		title: 'Aqlli shaharlar va moliyaviy integratsiya haqida global',
		date: new Date().toISOString()
	}
];

const swiperRef = ref(null);

useSwiper(swiperRef, {
	grabCursor: true,
	slidesPerView: 'auto',
	breakpoints: {
		0: {
			spaceBetween: 12
		},
		576: {
			spaceBetween: 22
		},
		1200: {
			spaceBetween: 32
		}
	},
	on: {
		afterInit: () => {
			setTimeout(() => {
				ScrollTrigger.refresh();
			}, 50);
		}
	}
});
</script>

<style lang="scss" scoped>
.events {
	@include soft-box;
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 1.7vw, 32px);
	&__slide {
		width: clamp(240px, 27vw, 320px);
	}
}
</style>
