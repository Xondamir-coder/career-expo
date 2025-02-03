<template>
	<main class="home">
		<HomeHero />
		<HomeAbout />
		<HomeEvents />
		<HomeNews />
		<Partners class="home__partners" />
	</main>
</template>

<script setup></script>

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
