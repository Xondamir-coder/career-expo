<template>
	<div class="error">
		<Logo class="error__top" />
		<Spaceship class="error__spaceship" />
		<div class="error__bottom">
			<h2 class="error__bottom-title">Page Not Found</h2>
			<p class="error__text">
				Sorry, the page you’re looking for does not exist or has been moved please go back
				to the Home page
			</p>
			<NuxtLink to="/" class="error__link" title="Go back to the home page">
				<span>Go back home</span>
				<IconsCircleNoArrow class="error__arrow" aria-hidden="true" />
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: false
});

useHead({
	title: '404',
	meta: [
		{
			name: 'description',
			content: 'Page not found'
		},
		{
			name: 'keywords',
			content: '404, page not found'
		}
	]
});
</script>

<style lang="scss" scoped>
@keyframes plug-slide {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}
@keyframes slide-from-bottom {
	from {
		transform: translateY(10px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes appear-from-small {
	from {
		opacity: 0;
		transform: scale(0.8);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes slide-from-top {
	from {
		transform: translateY(-20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.error {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-block: clamp(30px, 4vw, 60px);
	min-height: 100vh;
	justify-content: center;
	position: relative;
	overflow: hidden;
	gap: 32px;
	& > *:not(.error__content) {
		padding-inline: 16px;
	}
	&__spaceship {
		width: 100%;
		max-width: 420px;
		animation: appear-from-small 0.5s;
	}
	&__plug {
		animation: plug-slide 1s 0.3s backwards;
		@media only screen and (min-width: $bp-xl) {
			max-width: 80%;
		}
		@media only screen and (max-width: $bp-lg) {
			width: 150%;
			translate: -40%;
			height: auto;
		}
	}
	&__content {
		align-self: stretch;
		display: flex;
		flex-direction: column;
	}
	&__text {
		font-size: clamp(14px, 1vw, 17px);
		max-width: 50ch;
		font-weight: 400;
		line-height: 1.45;
		text-align: center;
		color: rgba($clr-black, 0.6);
	}
	&__title {
		color: #c89e45;
		font-size: clamp(150px, 15vw, 350px);
		align-self: center;
		font-weight: 500;
		animation: appear-from-small 0.7s backwards 0.15s;
	}
	&__link {
		background-color: $clr-primary;
		padding-inline: clamp(20px, 3vw, 30px);
		padding-block: clamp(12.5px, 1vw, 15.5px);
		border-radius: clamp(10px, 1vw, 12px);
		display: flex;
		align-items: center;
		color: #fff;
		transition: background-color 0.3s, color 0.3s;
		font-size: clamp(16px, 1vw, 17px);
		gap: 10px;
		margin-top: clamp(8px, 1vw, 14px);
		&:hover {
			background-color: #fff;
			color: $clr-primary;
			svg {
				fill: $clr-primary;
			}
		}
	}
	&__arrow {
		width: 24px;
		fill: #fff;
		transition: fill 0.3s;
	}
	&__bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(12px, 1vw, 16px);
		& > * {
			animation: slide-from-bottom 0.7s backwards;
			@for $i from 1 through 3 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.15s;
				}
			}
		}
		&-title {
			font-size: clamp(20px, 2vw, 28px);
			font-weight: 700;
			color: #111827;
		}
	}
	&__top {
		width: clamp(194px, 15vw, 232px);
		height: auto;
		animation: slide-from-top 0.7s backwards;
	}
}
</style>
