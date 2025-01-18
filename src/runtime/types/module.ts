import type { CounterId, CounterOptions } from './yandex-metrika';

export type YandexMetrikaCounters = { [key: CounterId]: CounterOptions };

export interface YandexMetrikaOptions {
	counters: YandexMetrikaCounters;
}

export interface YandexMetrikaPublicRuntimeConfig {
	yandexMetrika: YandexMetrikaOptions;
}
