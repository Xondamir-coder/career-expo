<template>
	<main class="about">
		<AboutHero />
		<AboutParticipation />
		<AboutOrganiser />
		<AboutReviews />
		<Partners />
	</main>
</template>

<script setup></script>

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
