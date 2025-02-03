<template>
	<section class="hero">
		<div class="hero__container">
			<div class="hero__left">
				<div class="hero__content">
					<div class="hero__title">
						Expo
						<img
							class="hero__title-image"
							src="~/assets/images/backpack-boy.jpg"
							alt="backpack boy" />
						Careerda sizning <span class="clr-primary">Kelajagingiz</span>
						<div class="hero__title-rocket">
							Boshlanadi!
							<span class="hero__icon">
								<img
									src="~/assets/images/rocket.png"
									alt="rocket"
									class="hero__rocket" />
							</span>
						</div>
					</div>
					<p class="hero__text">
						Expo Career – bu yirik ish yarmarkasi bo‘lib, O‘zbekiston va xorijdagi
						nufuzli kompaniyalarni bir maydonga jamlaydi. Biz tajribali mutaxassislar va
						istiqbolli yoshlar uchun o‘z mahoratlarini namoyon qilish hamda yangi ish
						imkoniyatlarini topish uchun
					</p>
				</div>
				<ul class="hero__labels">
					<li class="hero__label" v-for="label in labels" :key="label">
						{{ label }}
					</li>
				</ul>
			</div>
			<img src="~/assets/images/girl-thumbsup.jpg" alt="girl thumbsup" class="hero__image" />
		</div>
		<div class="hero__bottom">
			<h3 class="hero__bottom-title">
				<span class="clr-primary">Kelajagingiz</span>
				<br />
				Hamkorlari
			</h3>
			<div class="hero__banks">
				<div class="hero__bank" v-for="bank in banks" :key="bank">
					<component :is="bank" class="hero__bank-icon" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Ziraat from '~/components/banks/ziraat.vue';
import Tkb from '~/components/banks/tkb.vue';
import Mir from '~/components/banks/mir.vue';
import Artel from '~/components/banks/artel.vue';
import Visa from '~/components/banks/visa.vue';

const labels = [
	'Karyera rivoji',
	'Global aloqalar',
	'Tajriba almashish',
	'Ish imkoniyatlari',
	'Professional platforma',
	'Kelajak eshigi'
];
const banks = [
	Visa,
	Mir,
	Visa,
	Mir,
	Visa,
	Mir,
	Ziraat,
	Artel,
	Tkb,
	Ziraat,
	Artel,
	Tkb,
	Ziraat,
	Artel,
	Tkb
];
</script>

<style lang="scss" scoped>
.hero {
	display: flex;
	flex-direction: column;
	gap: clamp(12px, 1.3vw, 24px);

	&__bottom {
		display: flex;
		align-items: center;
		gap: clamp(16px, 1.7vw, 32px);
		background-color: #fff;
		border-radius: clamp(12px, 0.9vw, 16px);
		padding-block: clamp(20px, 1.5vw, 29px);
		padding-inline: clamp(16px, 1.3vw, 24px);
		@media only screen and (max-width: $bp-sm) {
			flex-direction: column;
			align-items: stretch;
		}
		&-title {
			color: $clr-midnight-blue;
			font-size: clamp(20px, 1.2vw, 22px);
			font-weight: 900;
			line-height: 1.2;
			text-transform: uppercase;
			padding-right: 70px;
			border-right: 1px solid #e9eaec;
		}
	}
	&__label {
		color: $clr-muted-grey;
		font-size: clamp(12px, 1.1vw, 20px);
		font-weight: 500;
		padding-block: clamp(9px, 1.1vw, 20px);
		padding-inline: clamp(16px, 1.3vw, 24px);
		background-color: #f1f2f4;
		border-radius: clamp(8px, 0.7vw, 12px);
	}
	&__labels {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(8px, 1.1vw, 20px);
	}
	&__left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 133.33%);
		border-radius: clamp(12px, 1.1vw, 20px);
		padding: clamp(16px, 2.1vw, 40px);
		gap: 60px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 1.3vw, 24px);
	}
	&__text {
		font-size: clamp(16px, 1.3vw, 24px);
		color: $clr-muted-grey;
		line-height: 1.2;
		max-width: 52ch;
	}
	&__title {
		font-size: clamp(24px, 2.5vw, 48px);
		font-weight: 900;
		line-height: 1.2;
		text-transform: uppercase;
		color: $clr-midnight-blue;
		max-width: 20ch;
		&-rocket {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		&-image {
			border-radius: 50%;
			aspect-ratio: 1;
			width: clamp(28px, 2.7vw, 52px);
			transform: translateY(5px);
		}
	}
	&__image {
		border-radius: clamp(12px, 1.1vw, 20px);
		height: 100%;
		@media only screen and (max-width: $bp-md) {
			order: -1;
		}
	}
	&__container {
		display: grid;
		gap: clamp(12px, 1vw, 19px);
		@media only screen and (min-width: $bp-md) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	&__bank {
		width: clamp(56px, 3.7vw, 70px);
	}
	&__banks {
		display: grid;
		gap: clamp(16px, 1.7vw, 32px);
		@include grid-scroll(clamp(56px, 3.7vw, 70px));
	}
	&__rocket {
		z-index: 1;
		width: 100%;
		position: relative;
		height: 100%;
	}
	&__icon {
		display: inline-block;
		width: clamp(24px, 2.8vw, 52px);
		position: relative;
		overflow: hidden;
		aspect-ratio: 1;
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 50%;
			background: linear-gradient(180deg, $clr-primary 0%, rgba($clr-primary, 0) 100%);
		}
	}
}
</style>
