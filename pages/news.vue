<template>
	<main class="news" id="news">
		<h1 class="news__title">Мы более 10 лет проводим крупнейшие карьерные выставки</h1>
		<div class="news__content">
			<NewsSidebar @change-field="changeField" :current-field="currentField" />
			<NewsFilter v-model="query" @submit-query="filterNews" />
			{{ query }}
			<div class="news__list">
				<NewsCard v-for="card in cards" :data="card" />
			</div>
		</div>
	</main>
</template>

<script setup>
import beeline from '~/assets/images/beeline.png';

// test data
const card = {
	company: {
		img: beeline,
		name: 'Beeline'
	},
	job: 'Главный бухгалтер',
	salary: 'от 10 000 0000 за месяц, на руки',
	requirements: ['Опыт 1-3 года', 'Можно удалённо']
};
const cards = Array(10).fill(card);

// reactive data
const currentField = ref('all');
const query = ref('');

const changeField = field => {
	currentField.value = field;
	filterNews();
};
const filterNews = () => {
	console.log(`Filtering news based on ${currentField.value} and ${query.value}`);
};
</script>

<style scoped lang="scss">
@keyframes slide-from-bottom {
	from {
		transform: translateY(25px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.news {
	margin-top: clamp(16px, 3.2vw, 60px);
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 4.2vw, 80px);
	padding-inline: 0;
	&__list {
		grid-area: list;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(300px, 21vw, 400px), 1fr));
		gap: clamp(20px, 2.1vw, 40px);
	}
	&__content {
		background-color: #ffffff;
		padding-block: clamp(20px, 2.1vw, 40px);
		padding-inline: $layout-spacing;
		border-top-left-radius: clamp(25px, 3.1vw, 60px);
		border-top-right-radius: clamp(25px, 3.1vw, 60px);
		display: grid;
		gap: clamp(30px, 3.1vw, 60px);
		@media only screen and (max-width: $bp-md) {
			grid-template-areas:
				'sidebar'
				'filter'
				'list';
		}
		@media only screen and (min-width: $bp-md) {
			grid-template-areas:
				'sidebar filter'
				'sidebar list';
			grid-template-rows: max-content 1fr;
			grid-template-columns: clamp(300px, 100%, 25%) 3.1fr;
		}
	}
	&__title {
		padding-inline: $layout-spacing;
		align-self: center;
		text-transform: uppercase;
		font-size: clamp(22px, 1.7vw, 32px);
		font-weight: 900;
		color: $clr-deep-cyan;
		line-height: 1.2;
		text-align: center;
		max-width: 45ch;
		animation: slide-from-bottom 0.6s backwards;
	}
}
</style>
