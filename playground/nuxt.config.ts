export default defineNuxtConfig({
	modules: ['../src/module'],
	devtools: { enabled: true },
	yandexMetrika: {
		counters: {
			1: {},
		},
	},
});
