import { defineNuxtPlugin, useRuntimeConfig, useServerHead } from '#imports';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const { counters, linkMetricsService } = config.public.yandexMetrika;

	useServerHead({
		link: [
			{
				rel: 'preload',
				as: 'script',
				href: linkMetricsService,
			},
		],
		script: [
			{
				id: 'yandex-metrika',
				key: 'yandex-metrika',
				type: 'text/javascript',
				innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							(window, document, "script", "${linkMetricsService}", "ym");`,
			},
		],
		noscript: counters.map(counter => ({
			innerHTML: `<div><img src="https://mc.yandex.ru/watch/${counter.id}" style="position:absolute; left:-9999px;" alt="" /></div>`,
		})),
	});
});
