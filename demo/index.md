```ts
import MarkdownIt from 'markdown-it'
import Prism from 'markdown-it-prism'
import fs from 'fs'

let html = fs.readFileSync('demo/index.html', 'utf-8')
const md = new MarkdownIt()
md.use(Prism)
const rendered = md.render(fs.readFileSync('demo/index.md', 'utf-8'))
html = html.replace(/<!--start-->[\s\S\n]*<!--end-->/m, `<!--start-->${rendered}<!--end-->`)
fs.writeFileSync('demo/index.html', html, 'utf-8')
```
