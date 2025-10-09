<template>
	<div class="card">
		<img :src="data.img" alt="banner" class="card__image" />
		<div class="card__fade"></div>
		<h3 class="card__title">
			{{ data.title }}
		</h3>
		<div class="card__date">
			<IconsCalendar class="icon fill-primary" />
			<span>{{ date }}</span>
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
	border-radius: clamp(12px, 0.9vw, 16px);
	overflow: hidden;
	&__image {
		width: 100%;
		height: 100%;
		aspect-ratio: 32/42;
	}
	&__date {
		text-transform: uppercase;
		margin: 16px;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: clamp(12px, 0.8vw, 13px);
		font-weight: 500;
		color: $clr-midnight-blue;
		border-radius: 4px;
		padding-block: clamp(5.5px, 0.4vw, 6.5px);
		padding-inline: clamp(8px, 0.6vw, 10px);
		background: #ffffff;
		border: 1px solid #e9eaec;
		backdrop-filter: blur(32px);
		align-self: flex-start;
		justify-self: flex-end;
	}
	&__title {
		color: #fff;
		font-size: clamp(12px, 1vw, 18px);
		font-weight: 700;
		line-height: 1.45;
		align-self: flex-end;
		z-index: 1;
		text-transform: uppercase;
		margin: 16px;
	}
	&__fade {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
		opacity: 0.6;
	}
	& > * {
		grid-area: 1/1/2/2;
	}
}
</style>
