<template>
	<header class="header">
		<div class="header__left">
			<button class="header__hamburger">
				<IconsMenu class="icon fill-primary" />
			</button>
			<NuxtLink to="/">
				<Logo class="logo header__logo" />
			</NuxtLink>
		</div>
		<nav class="header__nav">
			<NuxtLink
				v-for="link in links"
				:key="link.to"
				:to="link.to"
				class="header__link"
				active-class="active">
				<div class="header__link-bg_container">
					<div class="header__link-bg"></div>
				</div>
				<span class="header__link-text">{{ link.label }}</span>
			</NuxtLink>
		</nav>
		<div class="header__right">
			<button class="header__lang">
				<IconsGlobe class="icon fill-primary" />
				<span>{{ currentLang.toUpperCase() }}</span>
			</button>
			<NuxtLink to="/contact" class="header__button">Contact Us</NuxtLink>
		</div>
	</header>
</template>

<script setup>
const links = getLinks();
const currentLang = ref('en');
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
	from {
		transform: translateY(-5px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-from-bottom {
	from {
		transform: translateY(5px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-from-left {
	from {
		transform: translateX(-20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-right {
	from {
		transform: translateX(20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.header {
	display: flex;
	justify-content: space-between;
	margin-inline: $layout-spacing;
	border-radius: 16px;
	padding-inline: clamp(16px, 1.1vw, 20px);
	padding-block: 12px;
	margin-top: clamp(16px, 2.1vw, 40px);
	background-color: #fff;
	color: $clr-dark-grey;

	&__hamburger {
		border-radius: 42px;
		width: 42px;
		aspect-ratio: 1;
		background: #eaebed3d;
		border: 1px solid #eaebed;
		@include flex-center;
		@media only screen and (min-width: 1260px) {
			display: none;
		}
	}
	&__lang {
		font-weight: 500;
		font-size: clamp(12px, 1vw, 16px);
		display: flex;
		align-items: center;
		gap: 10px;
		background: $clr-light-white;
		border: 1px solid #f1f2f4;
		@media only screen and (max-width: 1260px) {
			display: none;
		}
	}
	&__button {
		@include flex-center;
		color: #fff;
		padding-block: clamp(14px, 1vw, 16px);
		font-weight: 500;
		font-size: clamp(14px, 0.9vw, 16px);
		background-color: $clr-primary;
		transition: background-color 0.3s, color 0.3s;
		&:hover {
			color: $clr-primary;
			background-color: #fff;
		}
	}
	&__right {
		display: flex;
		gap: clamp(10px, 1.2vw, 20px);
		& > * {
			border-radius: 10px;
			padding-inline: clamp(12px, 0.8vw, 14px);
			animation: 0.5s 0.6s backwards;
			&:first-child {
				animation-name: slide-from-left;
			}
			&:last-child {
				animation-name: slide-from-right;
			}
			@media only screen and (max-width: 1260px) {
				animation-delay: 0s;
				height: auto;
			}
		}
		@media only screen and (max-width: 1260px) {
			& > * {
				padding-block: 10px;
			}
		}
	}
	&__nav {
		display: flex;
		gap: 10px;
		border-radius: 61px;
		padding-block: 2px;
		@media only screen and (max-width: 1260px) {
			display: none;
		}
	}
	&__link {
		$transition-duration: 0.5s;
		font-size: clamp(14px, 1vw, 16px);
		font-weight: 500;
		padding-block: clamp(12px, 0.8vw, 14px);
		padding-inline: clamp(14px, 1.2vw, 22px);
		position: relative;
		border-radius: 8px;
		transition: color $transition-duration;
		animation: 0.5s backwards;
		display: flex;

		&-bg {
			background-color: $clr-primary;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transform: scaleY(0);
			transform-origin: bottom;
			transition: transform $transition-duration;
			&_container {
				border-radius: inherit;
				inset: 0;
				position: absolute;
				overflow: hidden;
				display: flex;
			}
		}
		&-text {
			z-index: 2;
		}
		&:hover {
			color: $clr-primary;
		}
		&.active {
			color: #fff;
			// background-color: $clr-primary;
			&::before {
				transform: translateX(-50%) scaleX(1);
			}
			.header__link-bg {
				transform: scaleY(1);
			}
		}
		&::before {
			content: '';
			position: absolute;
			height: 4px;
			width: calc(100% - clamp(14px, 1.2vw, 22px) * 2);
			top: 0;
			left: 50%;
			transform: translateX(-50%) scaleX(0);
			background: #fff;
			border-bottom-left-radius: 6px;
			border-bottom-right-radius: 6px;
			z-index: 2;
			transition: transform $transition-duration 0.3s;
		}
		&:not(:last-child)::after {
			content: '';
			position: absolute;
			top: 50%;
			width: 1px;
			transform: translateY(-50%);
			right: -5.4px;
			height: 50%;
			background-color: #eaebed;
		}
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				@if ($i % 2 == 0) {
					animation-name: slide-from-top;
				} @else {
					animation-name: slide-from-bottom;
				}
				animation-delay: $i * 0.1s + 0.1s;
			}
		}
	}
	&__left {
		display: flex;
		align-items: center;
		gap: clamp(10px, 1.7vw, 32px);
		animation: slide-from-left 0.5s;
	}
	&__logo {
		width: clamp(100px, 7.6vw, 150px);
		@media only screen and (max-width: 1260px) {
			animation: none;
		}
	}
}
</style>
