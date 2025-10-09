// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
					  @use "~/assets/styles/abstracts/_variables.scss" as *; 
						@use "~/assets/styles/abstracts/_mixins.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      titleTemplate: '%s - Career Expo',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-G2DGZWQ3ZJ',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G2DGZWQ3ZJ');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['nuxt-swiper', '@nuxtjs/seo']
});
