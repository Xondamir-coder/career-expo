<template>
	<div class="layout">
		<Header />
		<slot />
		<Footer />
		<Cookie />
		<Contact />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	background: #f2f6f9;
}
</style>
