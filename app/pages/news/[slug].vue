<template>
	<ArticleLayout :article="article" :similars="similars">
		<template #content>
			<img class="article__image" :src="img" :alt="article.title" />
			<h1>{{ article.title }}</h1>
		</template>
		<template #others>
			<NewsOthers />
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
				'News, Job Openings, Career Opportunities, Employment, Career Expo, Job Listings, Leading Companies, Professional Growth'
		}
	]
});
</script>

<style scoped lang="scss">
.article {
	&__image {
		width: 100%;
		aspect-ratio: 1269/510;
		border-radius: clamp(12px, 0.8vw, 16px);
	}
}
</style>
