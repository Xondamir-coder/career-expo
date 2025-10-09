<template>
	<main class="news">
		<h1 class="news__title">Мы более 10 лет проводим крупнейшие карьерные выставки</h1>
		<div class="news__content">
			<TitleBlock label="news" max-chars="">
				All the latest news and exciting events
			</TitleBlock>
			<div class="news__list">
				<NewsCard v-for="(card, i) in cards" :key="i" :data="card" />
			</div>
		</div>
		<Partners />
	</main>
</template>

<script setup>
import img from '~/assets/images/girls-studying.jpg';
const card = {
	date: new Date().toISOString(),
	title: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	img,
	slug: 'some-slug'
};
const cards = Array(6).fill(card);

useHead({
	title: 'News',
	meta: [
		{
			name: 'description',
			content: 'All the latest news and exciting events'
		},
		{
			name: 'keywords',
			content:
				'career expo, career growth, career development, job fair, job search, talent acquisition, recruitment, human resources, HR, career advice, career guidance, career counseling'
		}
	]
});
</script>

<style lang="scss" scoped>
.news {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2.1vw, 40px);
	padding-inline: 0;

	&__content {
		border-top-left-radius: clamp(25px, 3.1vw, 60px);
		border-top-right-radius: clamp(25px, 3.1vw, 60px);
		padding-inline: $layout-spacing;
		padding-block: clamp(16px, 2.1vw, 40px);
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: clamp(24px, 2.1vw, 40px);
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(500px, 30vw, 900px), 1fr));
		gap: clamp(16px, 1.7vw, 32px);
		@media only screen and (max-width: $bp-sm) {
			grid-template-columns: 1fr;
		}
	}
	&__title {
		@include section-title;
	}
}
</style>
