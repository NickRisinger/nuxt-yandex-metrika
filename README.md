![Nuxt Yandex Metrika module](./.github/social-card.png)

# Nuxt Yandex Metrika

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A lightweight module for integrating [Yandex.Metrika](https://metrika.yandex.ru/promo/product) into [Nuxt](https://nuxt.com), enabling easy analytics setup and tracking user interactions

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Install the module to your Nuxt application with one command:

```bash
# Using nuxi
npx nuxi module add nuxt-ym

# Using pnpm
pnpm add -D nuxt-ym

# Using yarn
yarn add --dev nuxt-ym

# Using npm
npm install --save-dev nuxt-ym
```

2. Add nuxt-yandex-metrika to the modules section of nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['nuxt-yandex-metrika'],
});
```

That's it! You can now use My Module in your Nuxt app ✨

## Configure

```ts
export default defineNuxtConfig({
  modules: ['nuxt-yandex-metrika'],
  yandexMetrika: {
    counters: [],
    debug: process.env.NODE_ENV !== 'production',
  }
});
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm run dev:prepare
  
  # Develop with the playground
  pnpm run dev
  
  # Build the playground
  pnpm run dev:build
  
  # Run ESLint
  pnpm run lint
  
  # Run Vitest
  pnpm run test
  pnpm run test:watch
  
  # Release new version
  pnpm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-ym/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-ym

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-ym.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-ym

[license-src]: https://img.shields.io/npm/l/nuxt-ym.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-ym

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
