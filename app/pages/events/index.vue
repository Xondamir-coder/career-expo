<template>
	<main class="events" id="events">
		<div class="events__content">
			<TitleBlock label="events" max-chars="'initial'">
				All the latest news and exciting events
			</TitleBlock>
			<div class="events__grid">
				<div class="events__list">
					<EventsCard v-for="cardData in data" :data="cardData" />
				</div>
				<EventsFilter v-model="selectedFilters" />
				<EventsCalendar v-model="selectedDate" />
			</div>
		</div>
	</main>
</template>

<script setup>
import img from '~/assets/images/girls-studying.jpg';

const obj = {
	img,
	title: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	date: '12 March',
	text: 'Taciti proin pulvinar adipiscing elit penatibus amet libero aenean vehicula ut sem cubilia taciti',
	slug: 'some-slug'
};
const data = Array(6).fill(obj);

// Reactive data
const selectedFilters = ref(['Career/Job Fairs']);
const selectedDate = ref();

useHead({
	title: 'Events',
	meta: [
		{
			name: 'description',
			content: 'All the latest news and exciting events'
		},
		{
			name: 'keywords',
			content:
				'Events, Job Openings, Career Opportunities, Employment, Career Expo, Job Listings, Leading Companies, Professional Growth'
		},
		// OG
		{
			property: 'og:title',
			content: 'Events - Career Expo'
		},
		{
			property: 'og:description',
			content:
				'Discover the latest job openings from top companies at Career Expo. Build your career with the right opportunity.'
		},
		{
			property: 'og:url',
			content: 'https://careerexpo.uz/events' // Replace with the actual page URL
		},
		{
			property: 'og:type',
			content: 'website'
		}
	]
});
</script>

<style scoped lang="scss">
.events {
	&__grid {
		display: grid;
		gap: clamp(12px, 1.5vw, 30px);
		@media only screen and (min-width: $bp-lg) {
			grid-auto-rows: max-content;
			grid-template-columns: 2fr 1fr;
			grid-template-areas:
				'list filter'
				'list calendar'
				'list .';
		}
	}
	&__list {
		grid-area: list;
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.5vw, 30px);
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&__title {
		text-transform: uppercase;
		font-size: clamp(22px, 2.2vw, 42px);
		font-weight: 900;
	}
	&__content {
		padding: clamp(16px, 1.5vw, 30px);
		background: #fff;
		border-radius: clamp(16px, 2vw, 40px);
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 40px);
	}
}
</style>
