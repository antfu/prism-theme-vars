# Prism <samp>--theme-vars</samp>

A customizable Prism.js theme using CSS variables

[![NPM version](https://img.shields.io/npm/v/prism-theme-vars?color=a1b858)](https://www.npmjs.com/package/prism-theme-vars)

[🌈 **Live Playground**](https://prism-theme-vars.netlify.app/)

- [codemirror-theme-vars](https://github.com/antfu/codemirror-theme-vars)

## Usage

```bash
npm i prism-theme-vars
```

```ts
import 'prism-theme-vars/base.css'
```

or

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/prism-theme-vars/base.css"
/>
```

## Configuration

Add CSS variables in your CSS, For example:

```css
@import 'prism-theme-vars/base.css';

:root {
  --prism-foreground: #393a34;
  --prism-background: #fbfbfb;
  --prism-comment: #b8c4b8;
  --prism-string: #c67b5d;
  --prism-literal: #3a9c9b;
  --prism-keyword: #248459;
  --prism-function: #849145;
  --prism-deleted: #a14f55;
  --prism-class: #2b91af;
  --prism-builtin: #a52727;
  --prism-property: #ad502b;
  --prism-namespace: #c96880;
  --prism-punctuation: #8e8f8b;
  --prism-decorator: #bd8f8f;
  --prism-json-property: #698c96;
}
```

See [base.css](./base.css) for more options avaliable.

### Built-in Themes

We have a few themes variables built-in that you can directly use.

```css
@import 'prism-theme-vars/base.css';
@import 'prism-theme-vars/themes/vitesse-light.css';

/* Overrides */
:root {
  --prism-background: #ffffff;
}
```

See all themes avaliable under [themes/\*](./themes). Contributions are also greatly welcome!

### Work with `codemirror-theme-vars`

```css
@import 'prism-theme-vars/base.css';
@import 'prism-theme-vars/to-codemirror.css';

/* --prism prefix will alias to --cm automatically */
:root {
  --prism-foreground: #393a34;
  --prism-background: #fbfbfb;
}
```

### Dark mode

Here is an example of Tailwind CSS favored dark mode support.

```css
html:not(.dark) {
  --prism-foreground: #393a34;
  --prism-background: #f8f8f8;

  --prism-comment: #758575;
  --prism-namespace: #444444;
  --prism-string: #bc8671;
  --prism-punctuation: #80817d;
  --prism-literal: #36acaa;
  --prism-keyword: #248459;
  --prism-function: #849145;
  --prism-deleted: #9a050f;
  --prism-class: #2b91af;
  --prism-builtin: #800000;
  --prism-property: #ce9178;
  --prism-regex: #ad502b;
}

html.dark {
  --prism-foreground: #d4d4d4;
  --prism-background: #1e1e1e;

  --prism-namespace: #aaaaaa;
  --prism-comment: #758575;
  --prism-namespace: #444444;
  --prism-string: #ce9178;
  --prism-punctuation: #d4d4d4;
  --prism-literal: #36acaa;
  --prism-keyword: #38a776;
  --prism-function: #dcdcaa;
  --prism-deleted: #9a050f;
  --prism-class: #4ec9b0;
  --prism-builtin: #d16969;
  --prism-property: #ce9178;
  --prism-regex: #ad502b;
}
```

## License

MIT
