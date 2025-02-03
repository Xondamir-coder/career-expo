<template>
	<section class="about">
		<HomeSectionHeader
			label="About expo"
			text="Expo Career – bu yirik ish yarmarkasi bo‘lib, O‘zbekiston va xorijdagi nufuzli
				kompaniyalarni bir maydonga jamlaydi. Biz tajribali mutaxassislar va istiqbolli
				yoshlar uchun o‘z mahoratlarini namoyon qilish hamda yangi ish imkoniyatlarini
				topish uchun">
			Expo Careerda sizning <span class="clr-primary">Kelajagingiz</span> Boshlanadi!
		</HomeSectionHeader>
		<div class="about__video-container">
			<video class="about__video" loop autoplay muted @timeupdate="trackVideo" ref="videoRef">
				<source src="~/assets/videos/board-drawing.mp4" type="video/mp4" />
			</video>
			<button class="about__video-controls" @click="toggleVideo">
				<div class="about__icon-container">
					<IconsPause class="about__icon" :class="{ active: isPlaying }" />
					<IconsPlay class="about__icon" :class="{ active: !isPlaying }" />
				</div>
				<span class="about__time">{{ currentTime }}</span>
			</button>
		</div>
		<ul class="about__list">
			<li class="about__item" v-for="(item, i) in items" :key="i">
				<div class="about__item-content">
					<p class="about__item-subtitle">{{ item.subtitle }}</p>
					<h3 class="about__item-title">{{ item.title }}</h3>
				</div>
				<IconsRect class="icon-rect" />
			</li>
		</ul>
	</section>
</template>

<script setup>
const currentTime = ref('00:00');
const isPlaying = ref(true);
const videoRef = ref();

const item = {
	title: 'About expo',
	subtitle: 'Expo Care'
};
const items = Array(4).fill(item);

const trackVideo = () => {
	const timeInSeconds = videoRef.value.currentTime;
	const minutes = Math.floor(timeInSeconds / 60);
	const seconds = Math.floor(timeInSeconds % 60);
	const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
	currentTime.value = displayTime;
};
const toggleVideo = () => {
	isPlaying.value ? videoRef.value.pause() : videoRef.value.play();
	isPlaying.value = !isPlaying.value;
};
</script>

<style lang="scss" scoped>
.about {
	@include soft-box;
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 2.1vw, 40px);
	&__item {
		background: #f1f2f4;
		border-radius: clamp(12px, 0.9vw, 16px);
		padding-block: clamp(24px, 1.85vw, 35px);
		padding-inline: clamp(16px, 1.3vw, 24px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-content {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
		&-subtitle {
			color: $clr-muted-grey;
			line-height: 1.2;
			font-size: clamp(14px, 0.9vw, 16px);
		}
		&-title {
			color: $clr-midnight-blue;
			font-weight: 700;
			font-size: clamp(16px, 1vw, 18px);
			text-transform: uppercase;
		}
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: clamp(12px, 1.3vw, 24px);
	}
	&__icon {
		width: clamp(14px, 1.3vw, 24px);
		fill: #fff;
		transition: fill 0.3s, transform 0.3s;
		transform: scale(0);
		grid-area: 1/1/2/2;
		&.active {
			transform: scale(1);
		}
		&-container {
			display: grid;
		}
	}
	&__time {
		font-weight: 500;
		font-size: clamp(14px, 1.1vw, 20px);
	}
	&__video {
		width: 100%;
		min-height: 100%;
		@media only screen and (max-width: $bp-sm) {
			transform: scale(1.2);
		}

		&-controls {
			padding-top: clamp(8px, 0.7vw, 12px);
			padding-bottom: clamp(4px, 0.5vw, 8px);
			padding-inline: clamp(18px, 1.7vw, 32px);
			border-top-left-radius: clamp(8px, 0.7vw, 12px);
			border-top-right-radius: clamp(8px, 0.7vw, 12px);
			background: #ffffff3d;
			backdrop-filter: blur(20px);
			color: #fff;
			display: flex;
			align-items: center;
			gap: 10px;
			position: absolute;
			z-index: 2;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			transition: color 0.3s, background 0.3s;
			&:hover {
				background: rgba($clr-primary, 0.239);
			}
		}
		&-container {
			border-radius: clamp(8px, 0.9vw, 16px);
			aspect-ratio: 17/6;
			overflow: hidden;
			position: relative;
			margin-top: min(1.1vw, 20px);
			@media only screen and (max-width: $bp-sm) {
				margin-top: 0;
				aspect-ratio: 30/18;
				display: flex;
			}
		}
	}
}
</style>
