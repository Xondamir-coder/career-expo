<template>
	<div class="legal">
		<h1 class="legal__title">
			{{ title }}
		</h1>
		<p class="legal__text">
			{{ subtitle }}
		</p>
		<div class="legal__box" v-for="(row, i) in content" :key="i">
			<h2 class="legal__subtitle">{{ row.title }}</h2>
			<p class="legal__text" v-if="row.subtitle">{{ row.subtitle }}</p>
			<ul class="legal__list" v-if="row.texts">
				<li class="legal__text" v-for="text in row.texts" :key="text">
					{{ text }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	subtitle: String,
	content: Array
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		transform: translateX(-70px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.legal {
	margin-top: clamp(30px, 4.3vw, 80px);
	margin-bottom: 30px;
	padding: $layout-spacing;
	border-top-left-radius: clamp(12px, 4vw, 80px);
	border-top-right-radius: clamp(12px, 4vw, 80px);
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 1.5vw, 30px);
	background-color: #fff;
	@media only screen and (max-width: $bp-md) {
		margin-inline: 16px;
		border-radius: 12px;
	}
	& > * {
		animation: slide-from-left 0.7s backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
	}
	&__subtitle,
	&__title {
		color: #111827;
		font-weight: 700;
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__list {
		list-style: disc;
		display: flex;
		flex-direction: column;
		gap: 7px;
		li {
			margin-left: 12px;
		}
	}
	&__subtitle {
		font-size: clamp(20px, 2vw, 24px);
	}
	&__title {
		font-size: clamp(24px, 2.5vw, 42px);
		text-transform: uppercase;
		font-weight: 900;
	}
	&__text {
		color: #323b49;
		opacity: 0.8;
		font-size: clamp(14px, 1vw, 17px);
		line-height: 1.45;
	}
}
</style>
