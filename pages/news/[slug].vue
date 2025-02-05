<template>
	<main class="news">
		<section class="news__container">
			<div class="news__wrapper">
				<NewsTop :date="news.date" :views="news.views" />
				<div class="news__content">
					<img src="~/assets/images/girls-studying.jpg" alt="girls studying" />
				</div>
			</div>
			<NewsSidenav />
		</section>
		<NewsOthers />
	</main>
</template>

<script setup>
import img from '~/assets/images/girls-studying.jpg';

const news = {
	date: new Date().toISOString(),
	title: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	img,
	slug: 'some-slug',
	views: '141'
};
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
	from {
		transform: translateY(40px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.news {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.2vw, 60px);
	&__container {
		display: grid;
		grid-template-columns: 2.5fr 1fr;
		gap: clamp(16px, 1.3vw, 24px);
		align-items: flex-start;
		@media only screen and (max-width: $bp-xl) {
			grid-template-columns: 2.5fr 300px;
		}
		@media only screen and (max-width: $bp-md) {
			grid-template-columns: 1fr;
		}
	}
	&__wrapper {
		background-color: #fff;
		border-top-right-radius: clamp(12px, 1.1vw, 20px);
		border-top-left-radius: clamp(12px, 1.1vw, 20px);
		padding: clamp(16px, 1.6vw, 30px);
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.6vw, 30px);
		animation: slide-from-bottom 0.5s backwards;
	}
	&__content {
		img {
			width: 100%;
			border-radius: 16px;
			aspect-ratio: 1269/510;
		}
	}
}
</style>
