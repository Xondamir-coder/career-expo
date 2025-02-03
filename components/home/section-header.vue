<template>
	<div class="section-header">
		<TitleBlock :label="label" data-gsap-animate="true">
			<slot />
		</TitleBlock>
		<p class="section-header__text">
			Expo Career – bu yirik ish yarmarkasi bo‘lib, O‘zbekiston va xorijdagi nufuzli
			kompaniyalarni bir maydonga jamlaydi. Biz tajribali
		</p>
	</div>
</template>

<script setup>
defineProps({
	text: String,
	label: String
});
</script>

<style lang="scss" scoped>
.section-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 12px;
	&__text {
		color: $clr-muted-grey;
		line-height: 1.2;
		font-size: clamp(14px, 1.1vw, 20px);
		max-width: 54ch;
	}
}
</style>
