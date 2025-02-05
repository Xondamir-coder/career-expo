<template>
	<main class="home">
		<HomeHero />
		<HomeAbout />
		<HomeEvents />
		<HomeNews />
		<Partners class="home__partners" />
	</main>
</template>

<script setup>
import ogImg from '~/assets/images/girl-thumbsup.jpg';
useHead({
	title: 'Career Expo – Your Future Starts Here!',
	meta: [
		{
			name: 'description',
			content:
				'Career Expo connects you with leading companies for career opportunities, global exposure, and professional growth in Uzbekistan and abroad.'
		},
		{
			name: 'keywords',
			content:
				'Career Expo, Career Opportunities, Jobs in Uzbekistan, Professional Growth, Global Career Opportunities, Job Fair, Networking'
		},
		{
			property: 'og:title',
			content: 'Career Expo – Your Future Starts Here!'
		},
		{
			property: 'og:description',
			content:
				'Join Career Expo, the premier job fair bringing top companies and talented professionals together for exceptional career opportunities.'
		},
		{
			property: 'og:image',
			content: ogImg // Replace with your actual OG image URL
		},
		{
			property: 'og:url',
			content: 'https://careerexpo.uz'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:title',
			content: 'Career Expo – Your Future Starts Here!'
		},
		{
			name: 'twitter:description',
			content:
				'Join Career Expo for networking, professional growth, and global job opportunities!'
		},
		{
			name: 'twitter:image',
			content: ogImg // Replace with your actual Twitter image URL
		}
	],
	link: [
		{ rel: 'canonical', href: 'https://careerexpo.uz' },
		{ rel: 'icon', href: '/favicon.ico' } // Replace with your favicon path
	]
});
</script>

<style lang="scss" scoped>
.home {
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: clamp(32px, 3.2vw, 60px);
	&__partners {
		margin-inline: 0 !important;
	}
}
</style>
