# prism-theme-vars

A customizable Prism.js theme using CSS variables

[![NPM version](https://img.shields.io/npm/v/prism-theme-vars?color=a1b858)](https://www.npmjs.com/package/prism-theme-vars)

## Usage

```bash
npm i prism-theme-vars
```

```ts
import 'prism-theme-vars/base.css'
```

or

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prism-theme-vars/base.css">
```

## Configuration

For example:

```css
:root {
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
```

See [base.css](./base.css) for more options avaliable.

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
