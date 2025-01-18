import type { CounterOptions } from './yandex-metrika';

export interface YandexMetrikaOptions {
	counters: CounterOptions[];
}

export interface YandexMetrikaPublicRuntimeConfig {
	yandexMetrika: YandexMetrikaOptions;
}
