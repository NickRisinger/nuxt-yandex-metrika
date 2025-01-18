export interface CounterOptions {
	id: number;
	accurateTrackBounce?: boolean | number;
	childIframe?: boolean;
	clickmap?: boolean;
	defer?: boolean;
	ecommerce?: boolean | string | unknown[];
	params?: object | unknown[];
	userParams?: object;
	trackHash?: boolean;
	trackLinks?: boolean;
	trustedDomains?: string[];
	type?: number;
	webvisor?: boolean;
	triggerEvent?: boolean;
	sendTitle?: boolean;
}
