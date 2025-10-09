<template>
	<main class="news">
		<section class="news__container">
			<div class="news__wrapper">
				<NewsTop :date="article.date" :views="article.views" />
				<div class="news__content">
					<slot name="content"></slot>
				</div>
			</div>
			<NewsSidenav :news="similars" />
		</section>
		<slot name="others"></slot>
	</main>
</template>

<script setup>
defineProps({
	article: Object,
	similars: Array
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
	from {
		transform: translateY(40px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.news {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.2vw, 60px);
	&__container {
		display: grid;
		grid-template-columns: 2.5fr 1fr;
		gap: clamp(16px, 1.3vw, 24px);
		align-items: flex-start;
		@media only screen and (max-width: $bp-xl) {
			grid-template-columns: 2.5fr 300px;
		}
		@media only screen and (max-width: $bp-md) {
			grid-template-columns: 1fr;
		}
	}
	&__wrapper {
		background-color: #fff;
		border-top-right-radius: clamp(12px, 1.1vw, 20px);
		border-top-left-radius: clamp(12px, 1.1vw, 20px);
		padding: clamp(16px, 1.6vw, 30px);
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.6vw, 30px);
		animation: slide-from-bottom 0.5s backwards;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.5vw, 30px);
	}
}
</style>
