<template>
	<section class="partners" ref="partnersRef">
		<div class="partners__left">
			<TitleBlock label="Partners">
				Expo Careerda sizning <span class="clr-primary">Kelajagingiz</span> Boshlanadi!
			</TitleBlock>
			<p class="partners__text" ref="textRef">
				Discover leading companies and innovative services at the international insurance
				exhibition. Explore the latest updates and opportunities in the insurance industry
				all in one place.
			</p>
		</div>
		<div class="partners__wrapper" ref="wrapperRef">
			<ul class="partners__list" v-for="(row, i) in rows" :key="i">
				<li class="partners__item" v-for="item in row" :key="item" ref="itemsRef">
					<component :is="item" class="partners__bank" />
				</li>
			</ul>
		</div>
	</section>
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

const partners = [
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
	Kdb,
	Infin,
	Ziraat
];
const rows = [partners.slice(0, partners.length / 2), partners.slice(partners.length / 2)];
const textRef = ref();
const itemsRef = ref();
const wrapperRef = ref();

onMounted(() => {
	GSAPanimation(textRef.value, {
		animProps: { x: -50 }
	});
	GSAPanimation(itemsRef.value, {
		animProps: { scale: 0, stagger: 0.1 },
		scrollTriggerOptions: {
			trigger: wrapperRef.value
		}
	});
});
</script>

<style lang="scss" scoped>
@keyframes animate-right {
	from {
		transform: translateX(-25%);
	}
	to {
		transform: translateX(50%);
	}
}
@keyframes animate-left {
	from {
		transform: translateX(25%);
	}
	to {
		transform: translateX(-100%);
	}
}
.partners {
	margin-inline: $layout-spacing;
	border-radius: clamp(25px, 3.1vw, 60px);
	padding: clamp(10px, 2.1vw, 40px);
	display: grid;
	background-color: #fff;
	gap: 8px;
	overflow: hidden;
	@media only screen and (min-width: $bp-lg) {
		grid-template-columns: repeat(2, 1fr);
	}
	&__text {
		color: $clr-muted-blue;
		font-size: clamp(14px, 1vw, 16px);
		line-height: 1.35;
	}
	&__item {
		border-radius: clamp(12px, 0.9vw, 16px);
		background: #ffffff;
		border: 1px solid #2c3a471a;
		aspect-ratio: 1;
		@include flex-center;
	}
	&__bank {
		width: 75%;
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 12px;
		overflow: hidden;
		background-color: $clr-light-white;
		padding-block: clamp(20px, 2.3vw, 44px);
		border-radius: clamp(12px, 0.9vw, 16px);
	}
	&__list {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: clamp(100px, 8.4vw, 160px);
		gap: 12px;
		animation: 70s infinite alternate linear;
		&:first-child {
			animation-name: animate-left;
		}
		&:last-child {
			animation-name: animate-right;
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 16px;
	}
}
</style>
