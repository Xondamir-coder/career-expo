<template>
	<div class="top">
		<NuxtLink to="/news" class="top__back" title="Go back to the news page">
			<IconsArrowLeft class="icon" aria-hidden="true" />
			<span class="top__word">Go back</span>
		</NuxtLink>
		<div class="top__cols">
			<div class="top__col">
				<IconsCalendar class="icon fill-primary" />
				<p>
					<span class="top__word">Published:</span>
					{{ Intl.DateTimeFormat('ru-RU').format(new Date(date)) }}
				</p>
			</div>
			<div class="top__col">
				<IconsEye class="icon fill-primary" />
				<p>
					<span class="top__word">Views:</span>
					{{ views }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	date: String,
	views: String
});
</script>

<style lang="scss" scoped>
.top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 500;
	font-size: clamp(14px, 1vw, 16px);
	color: $clr-muted-grey;
	padding-bottom: clamp(14px, 1.1vw, 20px);
	border-bottom: 1px solid #e9eaec;
	&__word {
		@media only screen and (max-width: $bp-md) {
			display: none;
		}
	}
	&__back {
		display: flex;
		align-items: center;
		gap: 12px;

		transition: color 0.3s;
		&:hover {
			color: $clr-primary;
			.icon {
				fill: $clr-primary;
				transform: translateX(-4px);
			}
		}
		.icon {
			fill: $clr-muted-grey;
		}
	}
	&__col {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	&__cols {
		display: flex;
		align-items: center;
		gap: clamp(16px, 1.7vw, 32px);
	}
}
</style>
