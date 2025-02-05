<template>
	<main class="policy">
		<!-- <Breadcrumbs :breadcrumbs="breadcrumbs" /> -->
		<Legal
			title="Privacy Policy"
			subtitle="The Career Expo Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services."
			:content="content" />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/privacy-policy',
		label: 'Privacy Policy'
	}
];
const content = [
	{
		title: 'About the Career Expo Exhibition',
		subtitle:
			'The Career Expo Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
		texts: null
	},
	{
		title: 'About the Career Expo Exhibition',
		subtitle:
			'The Career Expo Exhibition is designed to bring together banks, financial institutions, fintech companies, and industry experts to foster collaboration and exchange ideas. This event provides a unique opportunity for participants to:',
		texts: [
			'Showcase their latest financial products and services.',
			'Explore cutting-edge banking technologies and solutions.',
			'Build connections with global and regional industry leaders.',
			'Expand their customer base through direct engagement.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Career Expo Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Career Expo Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Career Expo Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Career Expo Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	}
];

useHead({
	title: 'Privacy Policy - Career Expo',
	meta: [
		{
			name: 'description',
			content:
				'Read the Privacy Policy of Career Expo to understand how we collect, use, and protect your data while using our services.'
		},
		{
			name: 'keywords',
			content:
				'Privacy Policy, Career Expo, Data Protection, User Privacy, GDPR Compliance, Personal Data'
		},
		{
			property: 'og:title',
			content: 'Privacy Policy - Career Expo'
		},
		{
			property: 'og:description',
			content:
				'Learn about how Career Expo collects, uses, and safeguards your data in our Privacy Policy.'
		},
		{
			property: 'og:url',
			content: 'https://careerexpo.uz/privacy-policy' // Replace with the actual URL
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
			content: 'Privacy Policy - Career Expo'
		},
		{
			name: 'twitter:description',
			content:
				'Find out how we protect your personal data in our Privacy Policy at Career Expo.'
		}
	],
	link: [
		{ rel: 'canonical', href: 'https://careerexpo.uz/privacy-policy' } // Replace with the actual URL
	]
});
</script>

<style lang="scss" scoped>
.policy {
	display: flex;
	gap: clamp(20px, 3vw, 30px);
	flex-direction: column;
}
</style>
