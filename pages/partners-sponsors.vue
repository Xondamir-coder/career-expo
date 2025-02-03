<template>
	<div class="partners__bg">
		<img
			class="partners__bg-image"
			src="~/assets/images/partners-bg.webp"
			alt="partners banner" />
	</div>
	<main class="partners__container">
		<div class="partners__hero">
			<h1 class="partners__title">
				Partners <br />
				& Sponsors
			</h1>
			<p class="partners__hero-text">
				At Expo Insurance 2025, we are proud to collaborate with industry leaders and
				innovators who share our vision of advancing the insurance sector.
			</p>
		</div>
		<div class="partners__content">
			<div class="flex justify-between wrap-12">
				<TitleBlock label="About expo" data-gsap-animate="true">
					Expo Careerda sizning <span class="clr-primary">Kelajagingiz</span> Boshlanadi!
				</TitleBlock>
				<p class="partners__content-text" ref="textRef">
					Expo Career – bu yirik ish yarmarkasi bo‘lib, O‘zbekiston va xorijdagi nufuzli
					kompaniyalarni bir maydonga jamlaydi. Biz tajribali mutaxassislar va istiqbolli
					yoshlar uchun o‘z mahoratlarini namoyon qilish hamda yangi ish imkoniyatlarini
					topish uchun
				</p>
			</div>
			<div class="partners__list">
				<div class="partners__item" v-for="bank in banks" :key="bank" ref="itemsRef">
					<component :is="bank" class="partners__bank" />
				</div>
			</div>
		</div>
		<Partners class="partners__component" />
	</main>
</template>

<script setup>
import Agro from '~/components/banks/agro.vue';
import Asaka from '~/components/banks/asaka.vue';
import Davr from '~/components/banks/davr.vue';
import Hamkor from '~/components/banks/hamkor.vue';
import Ipak from '~/components/banks/ipak.vue';
import Kapital from '~/components/banks/kapital.vue';
import Markaziy from '~/components/banks/markaziy.vue';
import Mastercard from '~/components/banks/mastercard.vue';
import Qqb from '~/components/banks/qqb.vue';
import Sqb from '~/components/banks/sqb.vue';
import Tbc from '~/components/banks/tbc.vue';
import Trast from '~/components/banks/trast.vue';
import Visa from '~/components/banks/visa.vue';
import Ziraat from '~/components/banks/ziraat.vue';
import Kdb from '~/components/banks/kdb.vue';
import Infin from '~/components/banks/infin.vue';

const banks = [
	Agro,
	Asaka,
	Davr,
	Hamkor,
	Ipak,
	Kapital,
	Markaziy,
	Mastercard,
	Qqb,
	Sqb,
	Tbc,
	Trast,
	Visa,
	Ziraat,
	Kdb,
	Infin
];

const textRef = ref();
const itemsRef = ref();

onMounted(() => {
	GSAPanimation(textRef.value, {
		animProps: { x: 50 }
	});
	itemsRef.value.forEach((el, i) => {
		GSAPanimation(el, {
			animProps: { scale: 0.8, rotation: i % 2 === 0 ? 8 : -8 }
		});
	});
});
</script>

<style scoped lang="scss">
@keyframes appear-scale-up {
	from {
		opacity: 0;
		transform: scale(1.25);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes appear-scale-down {
	from {
		opacity: 0;
		transform: scale(0.85);
	}
	to {
		opacity: 1;
		transform: scale(1);
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
.partners {
	&__hero {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.1vw, 20px);
		align-items: center;
		text-align: center;
		justify-content: center;
		height: 50vmax;
		max-height: 70vh;
		@media only screen and (max-width: $bp-lg) {
			padding-block: 60px;
			height: initial;
		}
		&-text {
			color: #ffffff;
			font-size: clamp(14px, 1.1vw, 20px);
			line-height: 1.45;
			max-width: 58ch;
			animation: slide-from-right 0.85s backwards 0.15s;
		}
	}
	&__bg {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 150vh;
		max-height: 1300px;
		background-color: #1a00bc;
		@media only screen and (max-width: $bp-lg) {
			height: 800px;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 60%;
			background: linear-gradient(182.38deg, rgba(242, 246, 249, 0) 0.12%, #f2f6f9 96.15%);
			@media only screen and (max-width: $bp-lg) {
				display: none;
			}
		}
		&-image {
			height: 100%;
			width: 100%;
			animation: appear-scale-up 1s;
		}
	}
	&__title {
		text-transform: uppercase;
		color: #fff;
		font-size: clamp(40px, 5.5vw, 100px);
		line-height: 1.2;
		animation: appear-scale-down 1s;
	}
	&__container {
		display: flex;
		flex-direction: column;
		gap: clamp(30px, 3.2vw, 60px);
		& > * {
			z-index: 1;
		}
	}
	&__component {
		margin-inline: 0;
	}
	&__content {
		@include soft-box;
		display: flex;
		flex-direction: column;
		gap: clamp(30px, 3.2vw, 60px);
		&-text {
			font-size: clamp(14px, 1.1vw, 20px);
			line-height: 1.2;
			color: $clr-muted-grey;
			max-width: 55ch;
			align-self: flex-end;
		}
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		column-gap: clamp(8px, 1.7vw, 32px);
		row-gap: clamp(8px, 1.1vw, 20px);
	}
	&__item {
		@include flex-center;
		aspect-ratio: 256/220;
		border: 1px solid #2c3a471a;
		border-radius: clamp(14px, 1.1vw, 20px);
	}
	&__bank {
		width: 59%;
		min-width: 108px;
	}
}
</style>
