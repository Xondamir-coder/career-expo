<template>
	<NuxtLink :to="`/events/${data.slug}`" class="card">
		<img :src="data.img" :alt="data.title" class="card__image" />
		<div class="card__content">
			<div class="card__date">
				<IconsCalendar class="card__icon" />
				<span>{{
					Intl.DateTimeFormat('en-US', {
						month: 'long',
						hour12: false,
						hour: '2-digit',
						minute: '2-digit',
						day: 'numeric'
					})
						.format(new Date(data.date))
						.replace('at', '')
				}}</span>
			</div>
			<h3 class="card__title">{{ data.title }}</h3>
			<button class="card__button">
				<span>Read more</span>
				<IconsCircleNoArrow class="icon fill-primary" />
			</button>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
.card {
	background-color: #fff;
	border: 2px solid #dfe1e7;
	box-shadow: 0px 2px 4px 0px #0d0d120d;
	padding: clamp(12px, 0.9vw, 16px);
	border-radius: clamp(12px, 1vw, 20px);
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 1.5vw, 30px);
	&:hover &__button {
		background-color: #d6ebf5;
		border-color: #85c2e0;
		color: $clr-primary;
	}

	&__title {
		font-size: clamp(16px, 1.1vw, 22px);
		font-weight: 500;
		line-height: 1.4;
		color: $clr-black;
	}
	&__button {
		border: 1px solid #f1f2f4;
		background-color: $clr-light-white;
		padding-block: 12px;
		padding-inline: 10px;
		border-radius: 10px;
		font-size: clamp(14px, 0.9vw, 16px);
		font-weight: 500;
		color: $clr-dark-grey;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: background-color 0.3s, border-color 0.3s, color 0.3s;
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
	&__image {
		aspect-ratio: 395/266;
		border-radius: 10px;
		width: 100%;
	}
	&__icon {
		width: clamp(16px, 1.1vw, 20px);
		fill: $clr-primary;
	}
	&__date {
		border: 1px solid #0000001a;
		backdrop-filter: blur(32px);
		padding-block: 8px;
		padding-inline: 10px;
		border-radius: 8px;
		font-size: 14px;
		color: $clr-midnight-blue;
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 8px;
	}
}
</style>
