<template>
	<NuxtLink :to="`/events/${data.slug}`" class="card">
		<img :src="data.img" :alt="data.title" class="card__image" />
		<div class="card__content">
			<div class="card__date">
				<IconsCalendar class="icon fill-primary" />
				<span>{{ data.date }}</span>
			</div>
			<h3 class="card__title">{{ data.title }}</h3>
			<div class="card__bottom">
				<p class="card__text">
					{{ data.text }}
				</p>
				<button class="card__button">
					<span>See more</span>
					<IconsCircleNoArrow class="card__icon" />
				</button>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
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
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: clamp(10px, 1.5vw, 30px);
	border: 2px solid #dfe1e7;
	box-shadow: 0px 1.33px 4px 0px #0d0d120d;
	padding: clamp(12px, 1.2vw, 24px);
	border-radius: clamp(12px, 1vw, 20px);
	overflow: hidden;

	&:hover &__button {
		background-color: #fff;
		color: $clr-primary;
		fill: $clr-primary;
	}
	&__title {
		font-size: clamp(16px, 1.4vw, 28px);
		font-weight: 500;
		color: $clr-black;
		line-height: 1.4;
	}
	&__text {
		line-height: 1.4;
		color: $clr-deep-cyan;
		font-size: clamp(14px, 0.9vw, 18px);
	}
	&__icon {
		width: clamp(16px, 1.1vw, 22px);
		fill: inherit;
	}
	&__button {
		background-color: $clr-primary;
		border-radius: 10px;
		font-size: clamp(14px, 0.8vw, 16px);
		font-weight: 500;
		color: #fff;
		fill: #fff;
		padding-block: 14px;
		padding-inline: 20px;
		display: flex;
		gap: 8px;
		transition: color 0.3s, background-color 0.3s, fill 0.3s;
	}
	&__date {
		background-color: $clr-white;
		color: $clr-midnight-blue;
		font-size: clamp(14px, 1vw, 20px);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 8px;
		align-self: flex-start;
		padding: 12px;
		border-radius: 8px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 16px;
		animation: slide-from-right 0.5s;
	}
	&__image {
		width: 100%;
		border-radius: clamp(10px, 0.8vw, 16px);
		animation: slide-from-left 0.5s;
	}
}
</style>
