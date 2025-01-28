<template>
	<div class="sidebar">
		<h2 class="sidebar__title">Работа по профессиям</h2>
		<div class="sidebar__list">
			<button
				class="sidebar__button"
				v-for="field in fields"
				:key="field.name"
				:class="{ active: field.name === currentField }"
				@click="emits('changeField', field.name)">
				<span class="sidebar__button-text">{{ field.label }}</span>
			</button>
		</div>
	</div>
</template>

<script setup>
const fields = [
	{ name: 'all', label: 'Все' },
	{ name: 'automotive', label: 'Автомобильный бизнес' },
	{ name: 'admin', label: 'Административный персонал' },
	{ name: 'security', label: 'Безопасность' },
	{ name: 'management', label: 'Высший и средний менеджмент' },
	{ name: 'it', label: 'Информационные технологии' },
	{ name: 'arts', label: 'Искусство, развлечения, массмедиа' },
	{ name: 'marketing', label: 'Маркетинг, реклама, PR' },
	{ name: 'medicine', label: 'Медицина, фармацевтика' },
	{ name: 'retail', label: 'Розничная торговля' },
	{ name: 'agriculture', label: 'Сельское хозяйство' },
	{ name: 'insurance', label: 'Страхование' },
	{ name: 'construction', label: 'Строительство, недвижимость' },
	{ name: 'tourism', label: 'Туризм, гостиницы, рестораны' },
	{ name: 'finance', label: 'Финансы, бухгалтерия' }
];
defineProps({
	currentField: String
});
const emits = defineEmits(['changeField']);
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		transform: translateX(-25px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.sidebar {
	grid-area: sidebar;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 1.7vw, 32px);
	&__button {
		$duration: 0.5s;
		padding-block: 10px;
		padding-inline: 22px;
		color: $clr-light-grey;
		font-weight: 500;
		font-size: clamp(16px, 1.2vw, 22px);
		text-align: left;
		position: relative;
		display: flex;
		transition: color $duration;
		animation: slide-from-left $duration backwards;
		@for $i from 1 through 30 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.05s + 0.3s;
			}
		}
		&-text {
			z-index: 1;
		}
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			transform-origin: bottom;
			transition: transform $duration;
			background-color: $clr-white;
			z-index: 1;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 2px;
			transition: transform $duration;
			background-color: $clr-primary;
			z-index: 2;
		}
		&:hover,
		&.active {
			color: $clr-primary;
		}
		&:not(.active) {
			&::before,
			&::after {
				transform: scaleY(0);
			}
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
	}
	&__title {
		font-weight: 700;
		color: $clr-black;
		font-size: clamp(20px, 1.7vw, 32px);
		animation: slide-from-left 0.5s 0.15s backwards;
	}
}
</style>
