<template>
	<div class="card">
		<div class="card__image-container">
			<img :src="data.company.img" :alt="data.company.name" class="card__image" />
		</div>
		<div class="card__content">
			<h3 class="card__title">{{ data.job }}</h3>
			<p class="card__text">{{ data.salary }}</p>
		</div>
		<ul class="card__list">
			<li class="card__item" v-for="requirement in data.requirements" :key="requirement">
				{{ requirement }}
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
@keyframes scale-up {
	from {
		transform: scale(0.8);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}
.card {
	background-color: $clr-dark-white;
	padding-inline: clamp(16px, 1.6vw, 30px);
	padding-block: clamp(24px, 2.35vw, 45px);
	display: flex;
	flex-direction: column;
	gap: clamp(12px, 1.1vw, 20px);
	align-items: flex-start;
	border-radius: clamp(20px, 1.6vw, 30px);
	animation: scale-up 0.5s backwards;
	@for $i from 1 through 10 {
		&:nth-child(#{$i}) {
			animation-delay: $i * 0.1s + 0.15s;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(8px, 0.5vw, 10px);
	}
	&__list {
		display: flex;
		gap: 10px;
	}
	&__item {
		background-color: $clr-white;
		color: $clr-primary;
		border-radius: 10px;
		padding: 12px;
		font-size: clamp(16px, 1vw, 18px);
		font-weight: 500;
	}
	&__text {
		line-height: 1.6;
		font-size: clamp(16px, 1.1vw, 21px);
		color: $clr-light-grey;
	}
	&__title {
		font-size: clamp(20px, 1.6vw, 30px);
		font-weight: 700;
		color: $clr-black;
	}
	&__image-container {
		@include flex-center;
		border: 1.5px solid $clr-light-white;
		background: #ffffff;
		box-shadow: 0px 1.5px 4.5px 0px rgba($clr-black, 0.051);
		border-radius: clamp(12px, 1vw, 18px);
		width: clamp(50px, 3.8vw, 72px);
		aspect-ratio: 1;
		padding: 3px;
	}
}
</style>
