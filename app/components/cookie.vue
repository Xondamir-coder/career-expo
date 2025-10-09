<template>
	<Transition name="slide">
		<div class="cookie" v-if="isActive">
			<IconsCookie />
			<h3 class="cookie__title">
				We use third-party cookies in order to personalzed your site experience
			</h3>
			<div class="cookie__buttons">
				<button
					class="cookie__button cookie__button--reject"
					@click="setCookiePermission('reject')">
					Reject
				</button>
				<button
					class="cookie__button cookie__button--accept"
					@click="setCookiePermission('accept')">
					Accept
				</button>
			</div>
		</div>
	</Transition>
</template>

<script setup>
const isActive = ref(false);

const setCookiePermission = state => {
	localStorage.setItem('cookiePermission', state);
	isActive.value = false;
};

onMounted(() => {
	const cookiePermission = localStorage.getItem('cookiePermission');
	if (!cookiePermission) isActive.value = true;
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
.cookie {
	background-color: #fff;
	border: 1px solid #e9eaec;
	box-shadow: 0px 2px 56px 0px #00000029;
	border-radius: 12px;
	padding: clamp(16px, 1.5vw, 30px);
	position: fixed;
	z-index: 10;
	right: $layout-spacing;
	bottom: 24px;
	display: flex;
	align-items: center;
	gap: clamp(24px, 1.5vw, 30px);
	@media only screen and (max-width: $bp-md) {
		inset: 0;
		width: 100%;
	}
	&__title {
		color: $clr-midnight-blue;
		max-width: 30ch;
		line-height: 1.35;
		font-size: clamp(16px, 1vw, 20px);
		font-weight: 700;
	}
	&__buttons {
		display: flex;
		gap: 16px;
	}
	&__button {
		padding-inline: 24px;
		padding-block: 14px;
		font-size: 14px;
		font-weight: 700;
		border-radius: 12px;
		transition: background-color 0.3s, color 0.3s;
		&--reject {
			color: $clr-muted-grey;
			background-color: #f1f2f4;
			&:hover {
				background-color: $clr-muted-grey;
				color: #fff;
			}
		}
		&--accept {
			font-weight: 500;
			color: #fff;
			background-color: $clr-primary;
			&:hover {
				background-color: #fff;
				color: $clr-primary;
			}
		}
	}
}
</style>
