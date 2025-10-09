<template>
	<div class="filter">
		<h2 class="filter__title">Filter</h2>
		<div class="filter__options">
			<label class="filter__option" v-for="filter in filters" :key="filter" :for="filter">
				<input
					type="checkbox"
					name="career"
					class="filter__checkbox"
					:id="filter"
					:value="filter"
					v-model="model" />
				<label :for="filter">{{ filter }}</label>
			</label>
		</div>
	</div>
</template>

<script setup>
const filters = ['Career/Job Fairs', 'Workshops & Webinars', 'Networking Event'];
const model = defineModel();
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(-15px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.filter {
	grid-area: filter;
	display: flex;
	flex-direction: column;
	gap: clamp(14px, 1.5vw, 30px);
	padding: clamp(16px, 1.5vw, 30px);
	border: 2px solid #dfe1e7;
	border-radius: clamp(12px, 1vw, 20px);
	box-shadow: 0px 1.33px 4px 0px #0d0d120d;
	&__checkbox {
		appearance: none;
		border: 1px solid #cbd5e0;
		width: clamp(12px, 1.6vw, 30px);
		aspect-ratio: 1;
		border-radius: 4px;
		transition: background-color 0.3s, border-color 0.3s, background-size 0.3s;
		background-image: url('~/assets/check.svg');
		background-size: 25%;
		background-repeat: no-repeat;
		background-position: center;
		&:checked {
			background-color: $clr-primary;
			border-color: transparent;
			background-size: 100%;
		}
	}
	&__option {
		display: flex;
		align-items: center;
		gap: clamp(10px, 0.9vw, 17px);
		font-size: clamp(16px, 1.2vw, 22px);
		font-weight: 500;
		animation: slide-from-left backwards 0.5s;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
		cursor: pointer;
		& > * {
			cursor: pointer;
		}
	}
	&__options {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: clamp(14px, 1.5vw, 30px);
	}
	&__title {
		font-weight: 900;
		text-transform: uppercase;
		line-height: 1.2;
		font-size: clamp(22px, 2.2vw, 42px);
		color: $clr-midnight-blue;
	}
}
</style>
