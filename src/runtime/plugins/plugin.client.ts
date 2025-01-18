import { defineNuxtPlugin, useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const { counters } = config.public.yandexMetrika;

	counters.forEach((counter) => {
		const { id, ...counterOptions } = counter;

		window.ym(id, 'init', counterOptions);

		document.addEventListener(`yacounter${id}inited`, () => {
			console.log(`Счетчик yaCounter${id} можно использовать`, counterOptions);
		}, { once: true });
	});
});
