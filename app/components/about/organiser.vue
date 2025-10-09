<template>
	<section class="organiser">
		<AboutTop
			label="News"
			title="О компании-организаторе Job Expo"
			text="Strong relationships start with strong interactions. Our feature lets you personalize customer experiences, building loyalty and revenue." />
		<ul class="organiser__cards" ref="cardRef">
			<li class="organiser__card organiser__card--big" ref="bigCardRef">
				<img
					src="~/assets/images/organiser-1.png"
					alt="organiser banner"
					class="organiser__image" />
				<div class="organiser__content">
					<h3 class="organiser__title">Опыт и профессионализм</h3>
					<p class="organiser__text">
						Наша компания более 10 лет успешно организует карьерные мероприятия,
						объединяя работодателей и соискателей.
					</p>
				</div>
			</li>
			<li class="organiser__card">
				<div class="organiser__content">
					<h3 class="organiser__title">Широкая сеть партнеров</h3>
					<p class="organiser__text">
						Сотрудничаем с ведущими компаниями, образовательными учреждениями и
						тренинговыми центрами для создания максимально эффективных выставок.
					</p>
				</div>
				<img
					src="~/assets/images/organiser-2.png"
					alt="organiser banner"
					class="organiser__image" />
			</li>
			<li class="organiser__card">
				<div class="organiser__content">
					<h3 class="organiser__title">Фокус на результат</h3>
					<p class="organiser__text">
						Мы помогаем участникам находить работу, строить карьеру и развивать
						профессиональные навыки.
					</p>
				</div>
				<img
					src="~/assets/images/organiser-3.png"
					alt="organiser banner"
					class="organiser__image" />
			</li>
		</ul>
	</section>
</template>

<script setup>
const bigCardRef = ref();
const cardRef = ref();

onMounted(() => {
	GSAPanimation(bigCardRef.value, {
		animProps: { y: -50 },
		scrollTriggerOptions: { end: 'center 80%' }
	});
	[...cardRef.value.querySelectorAll('.organiser__card:not(.organiser__card--big)')].forEach(
		(el, i) => {
			GSAPanimation(el, {
				animProps: { x: i % 2 == 0 ? 50 : -50 }
			});
		}
	);
});
</script>

<style lang="scss" scoped>
.organiser {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 3.2vw, 60px);
	&__title {
		color: $clr-black;
		font-weight: 700;
		font-size: clamp(18px, 1.7vw, 32px);
	}
	&__text {
		color: $clr-light-grey;
		font-size: clamp(12px, 1.1vw, 20px);
		line-height: 1.55;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: clamp(16px, 1.7vw, 32px);
	}
	&__image {
		flex: 1;
	}
	&__card {
		background: #ffffff;
		border: 1.33px solid #eceff3;
		border-radius: clamp(12px, 1.7vw, 32px);
		display: flex;
		flex-direction: column;
		&--big {
			@media only screen and (min-width: $bp-sm) {
				grid-row: span 2;
			}
			.organiser__content {
				padding-block: clamp(16px, 1.1vw, 20px);
				padding-inline: clamp(16px, 1.7vw, 32px);
			}
			.organiser__title {
				font-size: clamp(18px, 2.2vw, 42px);
			}
		}
	}
	&__cards {
		overflow: hidden;
		display: grid;
		gap: clamp(20px, 1.7vw, 32px);
		@media only screen and (min-width: $bp-sm) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>
