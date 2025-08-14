// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "~/assets/styles/abstracts/_variables.scss" as *; @use "~/assets/styles/abstracts/_mixins.scss" as *;'
				}
			}
		}
	},
	app: {
		head: {
			titleTemplate: '%s - Career Expo',
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
		}
	},
	css: ['~/assets/styles/main.scss'],
	modules: ['nuxt-swiper', '@nuxtjs/seo']
});
