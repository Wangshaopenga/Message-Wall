<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<h6 align='center'>
<a href="https://vitesse-lite.netlify.app/">在线 Demo</a>
</h6>

<h5 align='center'>
<b>轻量版的 <a href="https://github.com/antfu/vitesse">Vitesse</a></b>
</h5>
<br>

​		根据轻量版的 Vitesse改版,仅为自己使用,可以[查看原版](https://github.com/antfu/vitesse-lite)

<br>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, 当然

- ☁️ 零配置部署 Netlify

- 🍍 使用 Pinia 的状态管理
<br>

轻量级完整特性,请查看 [Vitesse Lite](https://github.com/antfu/vitesse-Lite)
<br>
完整特性,请查看 [Vitesse](https://github.com/antfu/vitesse)

## 从 [Vitesse](https://github.com/antfu/vitesse) 中删除了以下特性

- ~~i18n~~
- ~~Layouts~~
- ~~SSG~~
- ~~PWA~~
- ~~Markdown~~
- ~~Vitest~~

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库]([https://github.com/antfu/vitesse-lite/generate](https://github.com/Wangshaopenga/my-vue-template/generate)).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit Wangshaopenga/my-vue-template project-name
cd my-vitesse-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```
