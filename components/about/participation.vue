<template>
	<section class="participation">
		<AboutTop
			label="About expo"
			title="Преимуществ участия в Job Expo"
			text="Личное знакомство с работодателями и ответы на ваши вопросы" />
		<div class="participation__lists">
			<ul class="participation__list">
				<li
					class="participation__item"
					ref="itemsRef"
					v-for="(card, i) in cards.slice(0, cards.length / 2)"
					:key="i">
					<div class="participation__item-container">
						<component :is="card.icon" class="participation__item-icon" />
					</div>
					<div class="participation__item-content">
						<h3 class="participation__item-title">{{ card.title }}</h3>
						<p class="participation__item-text">{{ card.text }}</p>
					</div>
				</li>
			</ul>
			<ul class="participation__list">
				<li
					class="participation__item"
					ref="itemsRef"
					v-for="(card, i) in cards.slice(cards.length / 2)"
					:key="i">
					<div class="participation__item-container">
						<component :is="card.icon" class="participation__item-icon" />
					</div>
					<div class="participation__item-content">
						<h3 class="participation__item-title">{{ card.title }}</h3>
						<p class="participation__item-text">{{ card.text }}</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import IconsZap from '~/components/icons/zap.vue';
import IconsSmile from '~/components/icons/smile.vue';
import IconsGitlab from '~/components/icons/gitlab.vue';
import IconsShare from '~/components/icons/share.vue';
import IconsUser from '~/components/icons/user.vue';
import IconsHeart from '~/components/icons/heart.vue';

const cards = [
	{
		icon: IconsZap,
		title: 'Широкий выбор вакансий',
		text: 'ведущие компании и работодателей из различных отраслей'
	},
	{
		icon: IconsGitlab,
		title: 'Прямое общение',
		text: 'Личное знакомство с работодателями и ответы на ваши вопросы'
	},
	{
		icon: IconsSmile,
		title: 'Мастер-классы и тренинги',
		text: 'Посетите образовательные сессии, чтобы улучшить свои навыки'
	},
	{
		icon: IconsShare,
		title: 'Сетевые возможности',
		text: 'Найдите партнеров и расширьте круг полезных контактов'
	},
	{
		icon: IconsHeart,
		title: 'Шанс на трудоустройство',
		text: 'Многие компании проводят экспресс-собеседования прямо на выставке'
	},
	{
		icon: IconsUser,
		title: 'Инсайты рынка труда',
		text: 'Узнайте о востребованных профессиях и навыках'
	}
];

const itemsRef = ref([]);

onMounted(() => {
	itemsRef.value.forEach((el, i) => {
		GSAPanimation(el.firstChild, {
			animProps: { scale: 1.5, rotation: -10 }
		});
		GSAPanimation(el.lastChild.firstChild, {
			animProps: { x: -15 }
		});
		GSAPanimation(el.lastChild.lastChild, {
			animProps: { x: 15 }
		});
	});
});
</script>

<style lang="scss" scoped>
.participation {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.2vw, 60px);
	align-items: center;
	background: #ffffff;
	padding: clamp(16px, 2.1vw, 40px);
	border-radius: clamp(12px, 1.6vw, 30px);
	@media only screen and (max-width: $bp-lg) {
		margin-top: 65px;
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: clamp(24px, 1.7vw, 32px);
		justify-content: space-between;
		background-color: $clr-white;
		padding: clamp(16px, 1.7vw, 32px);
		border-radius: clamp(12px, 1.2vw, 22px);
		&-title {
			color: $clr-deep-cyan;
			font-size: clamp(18px, 1.5vw, 28px);
			line-height: 1.4;
			font-weight: 700;
		}
		&-text {
			line-height: 1.5;
			color: $clr-muted-grey;
			font-size: clamp(14px, 1.15vw, 22px);
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 6px;
		}
		&-container {
			@include flex-center;
			aspect-ratio: 1;
			width: clamp(36px, 3.4vw, 64px);
			border-radius: clamp(8px, 0.9vw, 16px);
			background-color: $clr-primary;
			box-shadow: 0px 6.67px 13.33px -2.67px #0d0d120a;
		}
		&-icon {
			stroke: $clr-off-white;
			width: clamp(20px, 2vw, 37px);
		}
	}
	&__lists {
		align-self: stretch;
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 2.1vw, 40px);
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(12px, 2.1vw, 40px);
		@media only screen and (max-width: $bp-md) {
			@include grid-scroll(260px, center);
		}
	}
}
</style>
