<template>
	<main class="about">
		<AboutHero />
		<AboutParticipation />
		<AboutOrganiser />
		<AboutReviews />
		<Partners />
	</main>
</template>

<script setup>
useHead({
	title: 'About Us',
	meta: [
		{
			name: 'description',
			content:
				'Learn more about Career Expo, a platform that brings together talents, ambitions, and success. Join us and discover new opportunities!'
		},
		{
			name: 'keywords',
			content:
				'Career Expo, About Us, Career Opportunities, Professional Networking, Job Expo, Ambitions, Success'
		},
		{
			property: 'og:title',
			content: 'About Us - Career Expo'
		},
		{
			property: 'og:description',
			content:
				'Learn more about Career Expo, where talents meet success. Discover our journey and mission.'
		},
		{
			property: 'og:url',
			content: 'https://careerexpo.uz/about' // Replace with the actual URL
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			name: 'twitter:card',
			content: 'summary'
		},
		{
			name: 'twitter:title',
			content: 'About Us - Career Expo'
		},
		{
			name: 'twitter:description',
			content:
				'Learn about Career Expo, a leading platform connecting talents with opportunities.'
		}
	],
	link: [
		{ rel: 'canonical', href: 'https://careerexpo.uz/about' } // Replace with the actual URL
	]
});
</script>

<style lang="scss" scoped>
.about {
	display: flex;
	flex-direction: column;
	gap: clamp(32px, 2.1vw, 40px);
	padding-inline: 0;
	& > * {
		margin-inline: $layout-spacing;
	}
}
</style>
