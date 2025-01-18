import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils/e2e';

describe('server features', async () => {
	const yandexMetrikaConfig = {
		counters: {
			1: {},
			2: {},
			3: {},
		},
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
		Object.keys(yandexMetrikaConfig.counters).forEach((id) => {
			expect(html).toContain(`<img src="https://mc.yandex.ru/watch/${id}"`);
		});
	});
});
