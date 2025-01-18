import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { defu } from 'defu';

import type { YandexMetrikaOptions, YandexMetrikaPublicRuntimeConfig } from './runtime/types';

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ym: ((...args: any[]) => void) & { a: any[]; l: number };
	}
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions extends YandexMetrikaOptions {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModulePublicRuntimeConfig extends YandexMetrikaPublicRuntimeConfig {}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-yandex-metrika',
		configKey: 'yandexMetrika',
		compatibility: {
			nuxt: '>=3.0.0',
		},
	},
	defaults: {
		counters: {},
	},
	setup(options, nuxt) {
		const resolver = createResolver(import.meta.url);

		nuxt.options.runtimeConfig.public.yandexMetrika = defu(
			nuxt.options.runtimeConfig.public.yandexMetrika,
			options,
		);

		if (Object.keys(options.counters).length) {
			addPlugin({
				src: resolver.resolve('./runtime/plugins/plugin.server.ts'),
				mode: 'server',
			});

			addPlugin({
				src: resolver.resolve('./runtime/plugins/plugin.client.ts'),
				mode: 'client',
			});
		}
	},
});
