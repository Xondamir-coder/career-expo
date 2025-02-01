<template>
	<section class="hero">
		<div class="hero__list">
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/black-girl.jpg" alt="girl" class="hero__image" />
				</div>
				<span class="hero__label">Lawyer</span>
			</div>
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/glasses-girl.jpg" alt="girl" class="hero__image" />
				</div>
				<span class="hero__label">Customers</span>
			</div>
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/black-dude.jpg" alt="black man" class="hero__image" />
				</div>
				<span class="hero__label">Engineer</span>
			</div>
		</div>
		<div class="hero__list">
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/asian-dude.jpg" alt="asian boy" class="hero__image" />
				</div>
				<span class="hero__label">Journalist</span>
			</div>
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/girl.png" alt="girl" class="hero__image" />
				</div>
				<span class="hero__label">Writer</span>
			</div>
			<div class="hero__item">
				<div class="hero__image-container">
					<img src="~/assets/images/old-woman.jpg" alt="old woman" class="hero__image" />
				</div>
				<span class="hero__label">Designer</span>
			</div>
		</div>
		<div class="hero__content">
			<h1 class="hero__title">Мы более 10 лет проводим крупнейшие карьерные выставки</h1>
			<p class="hero__text">
				Job Expo — это платформа, где встречаются таланты, амбиции и успех. Присоединяйтесь
				и откройте новые горизонты!
			</p>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes slide-from-right {
	from {
		opacity: 0;
		transform: translateX(50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes scale-up {
	from {
		opacity: 0;
		transform: scale(0.5);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes slide-from-left-little {
	from {
		opacity: 0;
		transform: translateX(-20px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@mixin change-order {
	.hero__image-container {
		grid-column: 2 / span 2;
	}
	.hero__label {
		grid-column: 1 / span 2;
	}
}
.hero {
	@include flex-center;
	position: relative;
	padding-bottom: clamp(230px, 13vw, 250px);
	padding-top: 150px;
	@media only screen and (max-width: $bp-lg) {
		padding-block: 230px;
	}
	&__item {
		display: grid;
		align-items: flex-end;
		color: #fff;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				.hero__image-container {
					animation-delay: $i * 0.15s;
				}
				.hero__label {
					animation-delay: $i * 0.15s;
				}
			}
		}
	}
	&__label {
		justify-self: flex-start;
		grid-column: 2 / span 2;
		grid-row: 1/2;
		margin-bottom: 4px;
		font-size: 16px;
		font-weight: 500;
		border-radius: 50px;
		border: 1px solid #f8fafb;
		background-color: var(--bg);
		padding-inline: 14px;
		padding-block: 4px;
		animation: slide-from-left-little 0.7s backwards;
	}
	&__image {
		height: 100%;
		width: 100%;
		&-container {
			grid-column: 1 / span 2;
			grid-row: 1/2;
			overflow: hidden;
			border-radius: 50%;
			width: 75px;
			aspect-ratio: 1;
			box-shadow: 0px 1.87px 3.73px 0px #0d0d120a;
			border: 2px solid #ffffff;
			animation: scale-up 0.5s backwards;
		}
	}
	&__list {
		position: absolute;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		top: 0;
		padding-block: 2.5vw;
		--xVal: 5%;
		@media only screen and (max-width: $bp-lg) {
			--xVal: 0;
			&:first-child,
			&:nth-child(2) {
				height: auto;
				width: 100%;
				flex-direction: row;
			}
		}
		&:first-child {
			left: var(--xVal);
			@media only screen and (max-width: $bp-lg) {
				top: 0;
			}
			.hero__item {
				&:nth-of-type(1) {
					--bg: #33cfff;
					@media only screen and (max-width: $bp-sm) {
						display: none;
					}
				}
				&:nth-of-type(2) {
					color: #143d52;
					--bg: #ffbe4c;
					@media only screen and (min-width: $bp-lg) {
						transform: translateX(5vw);
						@include change-order;
					}
					@media only screen and (max-width: $bp-sm) {
						transform: translateY(75%);
					}
				}
				&:nth-of-type(3) {
					--bg: #40c4aa;
					@media only screen and (min-width: $bp-lg) {
						transform: translateX(-5vw);
					}
					@media only screen and (max-width: $bp-sm) {
						@include change-order;
					}
				}
			}
		}
		&:nth-child(2) {
			right: var(--xVal);
			@media only screen and (max-width: $bp-lg) {
				top: auto;
				bottom: 0;
			}
			.hero__item {
				&:nth-of-type(1) {
					--bg: #ed8296;
					@include change-order;
					@media only screen and (max-width: $bp-sm) {
						display: none;
					}
				}
				&:nth-of-type(2) {
					--bg: #40c4aa;
					@media only screen and (min-width: $bp-lg) {
						transform: translate(-5vw, 5vw);
					}
					@media only screen and (max-width: $bp-sm) {
						transform: translateY(-125%);
					}
				}
				&:nth-of-type(3) {
					--bg: #33cfff;
					@media only screen and (min-width: $bp-lg) {
						transform: translateX(5vw);
					}
					@include change-order;
				}
			}
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 3.2vw, 60px);
		text-align: center;
		@media only screen and (min-width: $bp-lg) {
			max-width: 62.5%;
		}
	}
	&__title {
		animation: slide-from-right 0.7s backwards;
		font-size: clamp(24px, 2.75vw, 52px);
		font-weight: 900;
		line-height: 1.2;
		text-transform: uppercase;
		color: $clr-midnight-blue;
	}
	&__text {
		animation: slide-from-left 0.7s backwards;
		color: $clr-muted-grey-light;
		font-size: clamp(14px, 1.3vw, 24px);
		line-height: 1.55;
		max-width: 60ch;
		align-self: center;
	}
}
</style>
