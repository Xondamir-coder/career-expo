<template>
	<div class="filter">
		<form @submit.prevent="emits('submitQuery')" class="filter__form">
			<button type="submit" class="filter__search">
				<IconsSearch class="icon stroke-neutral-grey" />
			</button>
			<input required type="text" v-model="model" class="filter__input" placeholder="Поиск" />
		</form>
		<div class="filter__sort">
			<button class="filter__button">
				<span>Сортировка</span>
				<IconsArrowLeft class="filter__arrow" />
			</button>
		</div>
	</div>
</template>

<script setup>
defineProps({
	query: String
});

const model = defineModel();
const emits = defineEmits(['submitQuery']);
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
@keyframes slide-from-right {
	from {
		transform: translateX(25px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@mixin white-shadow-style {
	background: #ffffff;
	border-radius: clamp(10px, 0.7vw, 12px);
	border: 1.33px solid $clr-light-white;
	box-shadow: 0px 1.33px 4px 0px rgba($clr-black, 0.051);
}
.filter {
	grid-area: filter;
	display: flex;
	justify-content: space-between;
	color: $clr-neutral-grey;
	flex-wrap: wrap;
	gap: 10px;
	& > * {
		animation: 0.5s 0.15s backwards;
		&:first-child {
			animation-name: slide-from-left;
		}
		&:last-child {
			animation-name: slide-from-right;
		}
		@media only screen and (max-width: 840px) {
			flex: 1;
		}
	}
	&__sort {
		display: flex;
	}
	&__form {
		@include white-shadow-style;
		width: clamp(220px, 21vw, 400px);
		display: flex;
		align-items: center;
		gap: 10px;
		padding: clamp(12px, 0.9vw, 16px);
		transition: border-color 0.3s;
		&:has(.filter__input:focus) {
			border-color: $clr-primary;
		}
		&:has(.filter__input:user-invalid) {
			border-color: #ff0000;
		}
	}
	&__button {
		@include white-shadow-style;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 80px;
		padding-block: 12.5px;
		padding-inline: 16px;
		font-weight: 500;
		font-size: clamp(16px, 1.2vw, 22px);
		line-height: 1.6;
	}
	&__arrow {
		width: 12px;
		fill: $clr-neutral-grey;
		transform: rotate(-90deg);
	}
	&__search:hover {
		.icon {
			stroke: $clr-primary;
		}
	}
	&__input {
		flex: 1;
		font-size: clamp(16px, 1.2vw, 22px);
	}
}
</style>
