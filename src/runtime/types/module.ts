import type { CounterOptions } from './yandex-metrika';

export interface YandexMetrikaOptions {
	counters: CounterOptions[];
	debug?: boolean;
	linkMetricsService?: string;
}

export interface YandexMetrikaPublicRuntimeConfig {
	yandexMetrika: YandexMetrikaOptions;
}
