<template>
	<section class="other">
		<h2 class="other__title" ref="titleRef">Other news</h2>
		<div class="other__list">
			<swiper-container
				ref="swiperRef"
				class="other__list"
				slides-per-view="auto"
				grab-cursor="true"
				space-between="24">
				<swiper-slide
					ref="itemsRef"
					class="other__item"
					v-for="(item, i) in others"
					:key="i">
					<img :src="item.img" alt="card banner" class="other__item-image" />
					<div class="other__item-content">
						<div class="other__item-date">
							<IconsCalendar class="icon fill-primary" />
							{{
								Intl.DateTimeFormat('en-GB', {
									month: 'long',
									day: '2-digit',
									hour: '2-digit',
									minute: '2-digit'
								})
									.format(new Date(item.date))
									.replace('at', '')
							}}
						</div>
						<h3 class="other__item-title">
							{{ item.title }}
						</h3>
					</div>
					<NuxtLink :to="`/news/${item.slug}`" class="other__item-link">
						<span>Read Case Study</span>
						<IconsArrowRight class="icon stroke-primary" />
					</NuxtLink>
				</swiper-slide>
			</swiper-container>
		</div>
	</section>
</template>

<script setup>
import img from '~/assets/images/girls-studying.jpg';

const news = {
	date: new Date().toISOString(),
	title: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	img,
	slug: 'another-slug',
	views: '141'
};
const others = Array(12).fill(news);

const titleRef = ref(null);
const swiperRef = ref(null);
const itemsRef = ref(null);

onMounted(() => {
	GSAPanimation(titleRef.value, {
		animProps: { x: -50 }
	});
	itemsRef.value.forEach((el, i) => {
		GSAPanimation(el.children, {
			animProps: {
				x: i % 2 == 0 ? 25 : -25,
				rotation: i % 2 == 0 ? -3 : 3,
				stagger: 0.2
			},
			scrollTriggerOptions: { trigger: el }
		});
	});
});
</script>

<style lang="scss" scoped>
.other {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 1.7vw, 32px);
	&__title {
		text-transform: uppercase;
		font-size: clamp(28px, 2.2vw, 42px);
		color: $clr-midnight-blue;
		font-weight: 900;
	}
	&__list {
		padding-bottom: clamp(10px, 1.2vw, 30px);
	}
	&__item {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: clamp(300px, 23vw, 427px);
		background: #ffffff;
		border: 1.33px solid #dfe1e7;
		box-shadow: 0px 1.33px 4px 0px #0d0d120d;
		padding: clamp(10px, 0.9vw, 16px);
		border-radius: clamp(14px, 1.1vw, 20px);
		gap: clamp(16px, 1.6vw, 30px);

		&-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
		&-image {
			border-radius: 10px;
			aspect-ratio: 395/266;
		}
		&-date {
			@include news-card-date-text;
			background: #ffffff;
			border: 1px solid #0000001a;
			backdrop-filter: blur(32px);
			padding-block: 8px;
			padding-inline: 10px;
			border-radius: 8px;
		}
		&-title {
			@include news-card-title;
		}
		&-link {
			@include news-card-link;
		}
	}
}
</style>
