<template>
	<main class="vacancies" id="vacancies">
		<h1 class="vacancies__title">Мы более 10 лет проводим крупнейшие карьерные выставки</h1>
		<section class="vacancies__content">
			<VacanciesSidebar @change-field="changeField" :current-field="currentField" />
			<VacanciesFilter v-model="query" @submit-query="filterVacancies" />
			{{ query }}
			<div class="vacancies__list">
				<VacanciesCard v-for="card in cards" :data="card" />
			</div>
		</section>
		<Partners />
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
	filterVacancies();
};
const filterVacancies = () => {
	console.log(`Filtering vacancies based on ${currentField.value} and ${query.value}`);
};

const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

useHead({
	title: `Vacancies - Career Expo ${currentYear}`,
	meta: [
		{
			name: 'description',
			content: `Explore exciting job opportunities with leading companies in various industries. Find your next career step with Career Expo ${currentYear}.`
		},
		{
			name: 'keywords',
			content: `Vacancies, Job Openings, Career Opportunities, Employment, Career Expo, ${currentYear}, Job Listings, Leading Companies, Professional Growth`
		},
		{
			property: 'og:title',
			content: `Vacancies - Career Expo ${currentYear}`
		},
		{
			property: 'og:description',
			content: `Discover the latest job openings from top companies at Career Expo ${currentYear}. Build your career with the right opportunity.`
		},
		{
			property: 'og:url',
			content: 'https://careerexpo.uz/vacancies' // Replace with the actual page URL
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			name: 'twitter:card',
			content: 'summary'
		},
		{
			name: 'twitter:title',
			content: `Vacancies - Career Expo ${currentYear}`
		},
		{
			name: 'twitter:description',
			content: `Search through the latest job opportunities at Career Expo ${currentYear} and find your dream role.`
		}
	],
	link: [
		{ rel: 'canonical', href: 'https://careerexpo.uz/vacancies' } // Replace with the actual page URL
	]
});
</script>

<style scoped lang="scss">
.vacancies {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 2.1vw, 40px);
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
		@include section-title;
	}
}
</style>
