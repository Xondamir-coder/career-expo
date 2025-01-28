<template>
	<div class="card">
		<div class="card__left">
			<div class="card__top">
				<div class="card__date">
					<IconsCalendar class="icon fill-green" />
					<span>{{ date }}</span>
				</div>
				<h3 class="card__title">{{ data.title }}</h3>
			</div>
			<NuxtLink :to="`/news/${data.slug}`" class="card__link">
				<span>Read Case Study</span>
				<IconsArrowRight class="icon stroke-primary" />
			</NuxtLink>
		</div>
		<img :src="data.img" :alt="data.title" class="card__image" />
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object
});
const date = computed(() =>
	Intl.DateTimeFormat('en-GB', {
		month: 'long',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit'
	})
		.format(new Date(props.data.date))
		.replace('at', '')
);
</script>

<style lang="scss" scoped>
@mixin white-shadow-style {
	background: #ffffff;
	border: 1.33px solid #dfe1e7;
	box-shadow: 0px 1.33px 4px 0px rgba($clr-black, 0.051);
}
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-25px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(25px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.card {
	@include white-shadow-style;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: clamp(16px, 1.6vw, 30px);
	padding: clamp(12px, 1.1vw, 20px);
	border-radius: clamp(16px, 1.1vw, 20px);
	color: $clr-black;
	transition: box-shadow 0.3s;
	overflow: hidden;
	&:has(.card__link:hover) {
		box-shadow: 0px 1.33px 4px 0px rgba($clr-primary, 0.3);
	}
	&__date,
	&__title,
	&__link {
		animation: slide-from-left 0.5s backwards;
	}
	&__image {
		animation: slide-from-right 0.5s backwards;
	}
	&__date {
		display: flex;
		align-items: center;
		gap: 8px;
		color: $clr-midnight-blue;
		font-size: 14px;
		font-weight: 500;
	}
	&__title {
		animation-delay: 0.1s;
		line-height: 1.4;
		font-size: clamp(18px, 1.2vw, 22px);
		font-weight: 500;
	}
	&__link {
		@include white-shadow-style;
		animation-delay: 0.2s;
		display: flex;
		gap: 5px;
		align-items: center;
		font-size: clamp(14px, 1vw, 16px);
		font-weight: 500;
		padding-block: 10px;
		padding-inline: 16px;
		border-radius: 50px;
		position: relative;
		overflow: hidden;
		transition: color 0.3s, border-color 0.3s;
		&:hover {
			color: #fff;
			border-color: transparent;
			.icon {
				stroke: #fff;
				transform: translateX(3px);
			}
			&::after {
				transform: scaleY(1);
			}
		}
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-color: $clr-primary;
			transform: scaleY(0);
			transform-origin: top;
			transition: transform 0.3s;
		}

		span,
		.icon {
			z-index: 2;
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 20px;
	}
	&__image {
		border-radius: 10px;
		height: 100%;
	}
}
</style>
