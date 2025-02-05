<template>
	<section class="news">
		<TitleBlock label="news" data-gsap-animate="true">Expo Careerda</TitleBlock>
		<div class="news__container">
			<div class="news__left">
				<div class="news__imagefake"></div>
				<div class="news__content" ref="contentRef">
					<h3 class="news__title">
						Expo Insurance {{ new Date().getFullYear() }}: <br />
						A Space for New Opportunities
					</h3>
					<p class="news__text">
						Discover leading companies and innovative services at the international
						insurance exhibition. Explore the latest updates and opportunities in the
						insurance industry all in one place.
					</p>
				</div>
			</div>
			<div class="news__list">
				<HomeNewsCard v-for="(card, i) in cards" :key="i" :data="card" />
			</div>
		</div>
	</section>
</template>

<script setup>
import img from '~/assets/images/events-1.jpg';

const currentYear = new Date().getFullYear();
const card = {
	img,
	title: `Expo Insurance ${currentYear}: \n
A Space for New Opportunities`,
	date: new Date().toISOString(),
	text: 'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place.'
};
const cards = Array(3).fill(card);

const contentRef = ref();

onMounted(() => {
	GSAPanimation(contentRef.value.children, {
		animProps: { x: -30, stagger: 0.1 },
		scrollTriggerOptions: { trigger: contentRef.value }
	});
});
</script>

<style lang="scss" scoped>
.news {
	@include soft-box;
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 1.7vw, 32px);
	&__list {
		display: flex;
		flex-direction: column;
		gap: 24px;
		@media only screen and (max-width: $bp-md) {
			gap: 30px;
		}
	}
	&__title {
		font-size: clamp(16px, 1.3vw, 24px);
		color: $clr-dark-grey;
		font-weight: 700;
		line-height: 1.35;
		text-transform: uppercase;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(8px, 0.9vw, 16px);
	}
	&__text {
		font-size: clamp(14px, 0.9vw, 16px);
		color: $clr-muted-blue;
		line-height: 1.35;
	}
	&__left {
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 1.3vw, 24px);
	}
	&__imagefake {
		aspect-ratio: 30/24;
		flex: 1;
		background-color: #e9eaec;
		border-radius: clamp(8px, 0.9vw, 16px);
	}
	&__container {
		display: grid;
		gap: clamp(30px, 1.7vw, 32px);
		@media only screen and (min-width: $bp-lg) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>
