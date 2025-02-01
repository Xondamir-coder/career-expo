<template>
	<div class="top">
		<div class="top__label" ref="labelRef">
			<IconsRect class="icon-rect" />
			<span>{{ label }}</span>
		</div>
		<h2 class="top__title" ref="titleRef">
			{{ title }}
		</h2>
		<p class="top__text" ref="textRef">
			{{ text }}
		</p>
	</div>
</template>

<script setup>
defineProps({
	label: String,
	title: String,
	text: String
});

const titleRef = ref([]);
const labelRef = ref([]);
const textRef = ref([]);

onMounted(() => {
	GSAPanimation(titleRef.value, {
		animProps: { scale: 1.2 }
	});
	GSAPanimation(textRef.value, {
		animProps: { x: -50 }
	});
	GSAPanimation(labelRef.value, {
		animProps: { x: 50 }
	});
});
</script>

<style lang="scss" scoped>
.top {
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: clamp(12px, 0.9vw, 16px);
	color: $clr-midnight-blue;
	@media only screen and (max-width: $bp-sm) {
		align-items: flex-start;
		text-align: left;
	}
	&__label {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: clamp(14px, 1vw, 16px);
		font-weight: 500;
		text-transform: uppercase;
	}
	&__title {
		font-size: clamp(20px, 3.3vw, 62px);
		font-weight: 900;
		line-height: 1.25;
		@media only screen and (max-width: $bp-sm) {
			text-transform: uppercase;
		}
	}
	&__text {
		color: $clr-muted-grey-light;
		line-height: 1.55;
		font-size: clamp(14px, 1.2vw, 22px);
		max-width: 900px;
	}
}
</style>
