<template>
	<div class="card">
		<img class="card__image" :src="data.img" alt="card banner" />
		<div class="card__content">
			<div class="card__top">
				<div class="card__date">
					<IconsCalendar class="icon fill-primary" />
					<span>{{ date }}</span>
				</div>
				<h3 class="card__title">
					{{ data.title }}
				</h3>
			</div>
			<p class="card__text">{{ data.text }}</p>
		</div>
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
.card {
	display: grid;
	grid-template-columns: 1fr 1.45fr;
	gap: clamp(16px, 1.3vw, 24px);
	@media only screen and (max-width: 470px) {
		grid-template-columns: 1fr;
	}
	&__image {
		height: 100%;
		aspect-ratio: 320/238;
		border-radius: clamp(4px, 0.7vw, 12px);
		@media only screen and (max-width: $bp-sm) {
			aspect-ratio: 30/18;
		}
	}
	&__title {
		font-size: clamp(16px, 1.3vw, 24px);
		color: $clr-dark-grey;
		font-weight: 700;
		line-height: 1.35;
		text-transform: uppercase;
	}
	&__text {
		font-size: clamp(14px, 0.9vw, 16px);
		color: $clr-muted-blue;
		line-height: 1.35;
	}
	&__content {
		padding-block: clamp(10px, 1.3vw, 24px);
		gap: clamp(8px, 0.9vw, 16px);
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: $bp-md) {
			padding-block: 0;
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: clamp(8px, 0.6vw, 12px);
		align-items: flex-start;
	}
	&__date {
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: clamp(12px, 0.8vw, 13px);
		font-weight: 500;
		color: $clr-midnight-blue;
		border-radius: 4px;
		padding-block: clamp(5.5px, 0.4vw, 6.5px);
		padding-inline: clamp(8px, 0.6vw, 10px);
		border: 1px solid #e9eaec;
		backdrop-filter: blur(32px);
	}
}
</style>
