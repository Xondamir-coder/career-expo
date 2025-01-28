<template>
	<div class="block">
		<div class="block__top" ref="topRef">
			<IconsRect class="icon-rect" />
			<h3 class="block__label">{{ label }}</h3>
		</div>
		<h2
			class="block__title"
			:style="{ maxWidth: maxChars ? `${maxChars}ch` : '100%' }"
			ref="titleRef">
			<slot />
		</h2>
	</div>
</template>

<script setup>
defineProps({
	label: String,
	maxChars: {
		default: '18',
		type: String
	}
});

const titleRef = ref();
const topRef = ref();
const attrs = useAttrs();

onMounted(() => {
	if (!attrs.animate) {
		GSAPanimation(titleRef.value, {
			animProps: { x: -50 }
		});
		GSAPanimation(topRef.value, {
			animProps: { x: 50 }
		});
	}
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		transform: translateX(-50px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-right {
	from {
		transform: translateX(50px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.block {
	display: flex;
	flex-direction: column;
	color: $clr-midnight-blue;
	gap: clamp(12px, 0.9vw, 16px);
	&[animate] {
		.block__top {
			animation: slide-from-right 0.5s;
		}
		.block__title {
			animation: slide-from-left 0.5s;
		}
	}
	&__label {
		text-transform: uppercase;
		font-size: clamp(14px, 0.9vw, 16px);
		font-weight: 500;
	}
	&__top {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	&__title {
		font-weight: 900;
		text-transform: uppercase;
		line-height: 1.2;
		font-size: clamp(22px, 2.2vw, 42px);
	}
}
</style>
