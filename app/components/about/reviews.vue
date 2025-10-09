<template>
	<section class="reviews">
		<AboutTop
			label="Testominals"
			title="Отзывы участников Job Expo"
			text="Личное знакомство с работодателями и ответы на ваши вопросы" />
		<div class="reviews__container">
			<ul class="reviews__list" v-for="(row, i) in rows" :key="i" ref="itemsRef">
				<li class="reviews__item" v-for="(review, i) in row" :key="i">
					<h3 class="reviews__item-title">
						{{ review.text }}
					</h3>
					<div class="reviews__item-bottom">
						<div class="reviews__item-left">
							<h4 class="reviews__item-name">
								{{ review.name }}
							</h4>
							<p class="reviews__item-job">
								{{ review.job }}
							</p>
						</div>
						<img :src="review.img" alt="reviewer banner" class="reviews__item-image" />
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import img from '~/assets/images/latina.png';

const review = {
	text: 'На выставке я не только нашла работу, но и посетила полезные мастер-классы. Очень рекомендую!',
	name: 'Назарова Надежда Фёдоровна',
	job: 'маркетолог',
	img
};
const reviews = Array(12).fill(review);
const reviewsHalfLength = reviews.length / 2;
const rows = [reviews.slice(0, reviewsHalfLength), reviews.slice(reviewsHalfLength)];
const itemsRef = ref([]);
const { $gsap } = useNuxtApp();
onMounted(() => {
	const fromX = window.innerWidth < 768 ? 150 : 300;
	const toX = window.innerWidth < 768 ? 50 : 100;
	itemsRef.value.forEach((el, i) => {
		$gsap.fromTo(
			el,
			{
				x: i % 2 == 0 ? -fromX : fromX
			},
			{
				x: i % 2 == 0 ? toX : -toX,
				scrollTrigger: {
					trigger: el,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				}
			}
		);
	});
});
</script>

<style lang="scss" scoped>
.reviews {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.2vw, 60px);
	background-color: #fff;
	margin-inline: 0 !important;
	padding-inline: $layout-spacing;
	padding-block: clamp(16px, 2.1vw, 40px);
	&__container {
		display: flex;
		flex-direction: column;
		gap: clamp(14px, 1.7vw, 32px);
		position: relative;
		overflow-x: clip;
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				270deg,
				#ffffff 0%,
				rgba(255, 255, 255, 0) 49.77%,
				#ffffff 100%
			);
		}
	}
	&__list {
		display: grid;
		gap: clamp(14px, 1.7vw, 32px);
		grid-auto-flow: column;
		grid-auto-columns: clamp(220px, 25.8vw, 512px);
	}
	&__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: $clr-black;
		border: 1.33px solid #dfe1e7;
		border-radius: clamp(10px, 1.2vw, 22px);
		padding: clamp(14px, 1.7vw, 32px);
		gap: clamp(23px, 3.2vw, 60px);
		box-shadow: 0px 0px 1px 0px rgba($clr-black, 0.3);

		&-title {
			font-size: clamp(11px, 1.3vw, 24px);
			line-height: 1.5;
			font-weight: 500;
		}
		&-name {
			font-weight: 500;
			font-size: clamp(10px, 1.1vw, 21px);
		}
		&-job {
			color: $clr-muted-grey-light;
			font-size: clamp(8px, 1vw, 18px);
			font-weight: 500;
		}
		&-left {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
		&-bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-image {
			width: clamp(23px, 2.8vw, 54px);
			aspect-ratio: 1;
			border-radius: 50%;
		}
	}
}
</style>
