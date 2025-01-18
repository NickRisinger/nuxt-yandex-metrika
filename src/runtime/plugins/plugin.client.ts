import { defineNuxtPlugin, useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const { counters } = config.public.yandexMetrika;

	for (const [counterId, counterOptions] of Object.entries(counters)) {
		window.ym(counterId, 'init', counterOptions);

		document.addEventListener(`yacounter${counterId}inited`, () => {
			console.log(`Счетчик yaCounter${counterId} можно использовать`, counterOptions);
		}, { once: true });
	}
});
