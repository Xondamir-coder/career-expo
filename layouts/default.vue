<template>
	<div class="layout">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	background: #f2f6f9;
}
</style>
