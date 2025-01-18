import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils/e2e';

describe('server features', async () => {
	const yandexMetrikaConfig = {
		counters: [
			{ id: 1 },
			{ id: 1 },
			{ id: 1 },
		],
		linkMetricsService: 'https://mc.yandex.ru/metrika/tag.js',
	};

	await setup({
		rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
		nuxtConfig: {
			yandexMetrika: yandexMetrikaConfig,
		},
	});

	it('renders the index page', async () => {
		const html = await $fetch('/');
		expect(html).toContain('<div>basic</div>');
	});

	it('includes Yandex Metrika script tag', async () => {
		const html = await $fetch('/');
		expect(html).toContain('<script id="yandex-metrika"');
	});

	it('includes Yandex Metrika tracking pixels for each counter', async () => {
		const html = await $fetch('/');
		yandexMetrikaConfig.counters.forEach((counter) => {
			expect(html).toContain(`<img src="https://mc.yandex.ru/watch/${counter.id}"`);
		});
	});

	it('includes a link to the script for Yandex Metrica', async () => {
		const html = await $fetch('/');
		expect(html).toContain(yandexMetrikaConfig.linkMetricsService);
	});
});
