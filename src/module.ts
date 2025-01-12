import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { defu } from 'defu';

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ym: ((...args: any[]) => void) & { a: any[]; l: number };
	}
}

export interface ModuleOptions {
	counters: { [key: number]: unknown };
}

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

		nuxt.options.runtimeConfig.public.ym = defu(
			nuxt.options.runtimeConfig.public.ym,
			options,
			{ runtimeParams: {} },
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
