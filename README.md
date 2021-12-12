# Vite Vuetify 2 Starter

Vuetify 2 development made easy with the power of Vite. This template should help get your next  Vuetify 2 project started quickly.

## Features

* [Vue 2](https://github.com/vuejs/vue), [Vite 2](https://github.com/vitejs/vite)
* [Vuetify 2](https://github.com/vuetifyjs/vuetify) support with component auto importing (powered by [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components))
* TypeScript
* ESLint.. opinionated single quotes, no semi, PascalCase vue templates
* Custom SASS/SCSS Vuetify variables support

## Try it now

### GitHub Template
[Create a repo from this template on GitHub](https://github.com/abdu-udwz/vite-vuetify2-starter/generate).

### Using [`degit`](https://github.com/Rich-Harris/degit)

```bash
npx degit abdu-udwz/vite-vuetify2 vuetify-app
cd vuetify-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Dev

Run the following and visit http://localhost:8080
```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Recommended IDE setup

- [VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## Customizing Vuetify SASS variables

This starter template comes shipped with pre-packed support for custom SASS/SCSS variables. To customize Vuetify's SASS variables create a file named `variables.sass` or `variables.scss` in the directory `src/style`.

You can learn more on Vuetify's SASS variables on [this page](https://vuetifyjs.com/en/features/sass-variables/).

> **NOTE**
> * Using custom SASS variables will increase the page load time in development mode. And currently it seems to be VERY slow.
>
> * Custom variables support is enabled even if the the file `variables.sass/scss` is empty.
> * This starter template tries to replace Vuetify's webpack plugin [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) which is the package responsable for loading styles in the tradition webpack-based dev tool. 

## What next?

- [ ] Update `package.json` with your project details (name, author, ..etc)
- [ ] Check & update dependencies
- [ ] Modifying `.eslintrc.js` to your preferred style.


## Known issues

The first page load is slow because Vite transforms SASS files to a browser-recognizable format on the initial load. Subsequent page loads should be fast unless changes to Vuetify's SASS variables are made.