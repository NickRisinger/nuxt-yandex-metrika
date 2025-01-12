import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
	id?: string;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-yandex-metrika',
		configKey: 'yandexMetrika',
	},
	defaults: {},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url);

		addPlugin(resolver.resolve('./runtime/plugin'));
	},
});
