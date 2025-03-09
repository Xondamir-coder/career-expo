<template>
	<ArticleLayout :article="article" :similars="similars">
		<template #content>
			<img class="article__image" :src="img" :alt="article.title" />
			<h1>{{ article.title }}</h1>
		</template>
		<template #others>
			<h2 class="article__title">Other events</h2>
			<swiper-container class="article__list" :init="false" ref="swiperRef">
				<swiper-slide v-for="(data, i) in others" :key="i" class="article__item">
					<EventsOtherCard :data="data" />
				</swiper-slide>
			</swiper-container>
		</template>
	</ArticleLayout>
</template>

<script setup>
import img from '~/assets/images/girls-studying.jpg';

const article = {
	date: new Date().toISOString(),
	title: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	img,
	slug: 'some-slug',
	views: '141'
};
const similars = Array(4).fill(article);
const others = Array(4).fill(article);

const swiperRef = ref(null);

useSwiper(swiperRef, {
	slidesPerView: 'auto',
	grabCursor: true,
	breakpoints: {
		0: {
			spaceBetween: 12
		},
		1024: {
			spaceBetween: 20
		},
		1260: {
			spaceBetween: 24
		}
	}
});

useHead({
	title: article.title,
	meta: [
		{
			name: 'description',
			content: article.title
		},
		{
			name: 'keywords',
			content:
				'Events, Job Openings, Career Opportunities, Employment, Career Expo, Job Listings, Leading Companies, Professional Growth'
		}
	]
});
</script>

<style lang="scss" scoped>
.article {
	&__item {
		width: clamp(300px, 23vw, 427px);
		display: flex;
	}
	&__title {
		text-transform: uppercase;
		font-size: clamp(28px, 2.2vw, 42px);
		color: $clr-midnight-blue;
		font-weight: 900;
	}
	&__image {
		width: 100%;
		aspect-ratio: 1269/510;
		border-radius: clamp(12px, 0.8vw, 16px);
	}
}
</style>
