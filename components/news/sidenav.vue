<template>
	<div class="sidenav">
		<h2 class="sidenav__title">Popular news</h2>
		<nav class="sidenav__list">
			<NuxtLink
				class="sidenav__item"
				:to="`/news/${item.slug}`"
				v-for="(item, i) in news"
				:key="i">
				<img
					width="100"
					height="100"
					:src="item.img"
					alt="news banner"
					class="sidenav__item-image" />
				<h3 class="sidenav__item-title">
					{{
						item.title.length > titleMaxLength
							? item.title.slice(0, titleMaxLength) + '...'
							: item.title
					}}
				</h3>
				<div class="sidenav__item-details">
					<div class="sidenav__item-detail">
						<IconsCalendar class="icon fill-primary" />
						{{ Intl.DateTimeFormat('ru-RU').format(new Date(item.date)) }}
					</div>
					<div class="sidenav__item-detail">
						<IconsEye class="icon fill-primary" />
						{{ item.views }}
					</div>
				</div>
			</NuxtLink>
		</nav>
	</div>
</template>

<script setup>
import img from '~/assets/images/boys-bicycle.jpg';

const obj = {
	img,
	title: 'What are bay windows: can you eat them, wear them, or take them on a trip? Neither. We tell and show you in this text',
	views: '141',
	date: new Date().toISOString(),
	slug: 'some-slug'
};
const news = Array(4).fill(obj);

const titleMaxLength = ref(50);

onMounted(() => {
	if (window.innerWidth <= 768 && window.innerWidth > 480) {
		titleMaxLength.value = 150;
	}
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.sidenav {
	background: #ffffff;
	border: 1px solid #e9eaec;
	backdrop-filter: blur(30px);
	border-radius: clamp(14px, 1.1vw, 20px);
	padding: clamp(16px, 1.6vw, 30px);
	display: flex;
	flex-direction: column;
	gap: clamp(12px, 1.1vw, 20px);
	color: $clr-deep-cyan;
	overflow: hidden;

	&__item {
		padding-block: clamp(12px, 1.1vw, 20px);
		border-block: 1px solid #e9eaec;
		display: grid;
		grid-template-areas:
			'image title'
			'image details';
		grid-template-columns: 1fr 2.45fr;
		gap: clamp(12px, 1vw, 16px);
		transition: all 0.3s;
		animation: slide-from-left 0.5s backwards;
		@for $i from 1 through 4 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
		&:hover {
			color: $clr-primary;
			transform: translateX(15px);
		}
		&-details {
			grid-area: details;
			border-top: 1px solid #e9eaec;
			padding-top: 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-detail {
			font-weight: 500;
			font-size: clamp(14px, 1vw, 16px);
			color: $clr-muted-blue;
			display: flex;
			align-items: center;
			gap: 7px;
		}
		&-image {
			grid-area: image;
			aspect-ratio: 1;
			border-radius: 12px;
			height: 100%;
		}
		&-title {
			grid-area: title;
			font-size: clamp(14px, 1vw, 16px);
			font-weight: 700;
			line-height: 1.35;
		}
		&:first-child {
			border-block-start: none;
			padding-top: 0;
		}
		&:last-child {
			border-block-end: none;
			padding-bottom: 0;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		&:has(.sidenav__item:hover) .sidenav__item:not(:hover) {
			opacity: 0.25;
			transform: translateX(-15px);
		}
	}
	&__title {
		font-size: clamp(20px, 1.3vw, 24px);
		font-weight: 700;
	}
}
</style>
