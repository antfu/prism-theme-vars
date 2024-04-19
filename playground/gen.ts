import fs from 'node:fs'
import { parse, resolve } from 'node:path'

import { capitalCase } from 'change-case'
import fg from 'fast-glob'

function cssToJson(css: string): Record<string, string> {
  const match = css.match(/:root {([\s\S\n]*?)}/m)

  const object = Object.fromEntries(match![1].split('\n').map(i => i.trim().slice(0, -1).split(': ')))
  return object
}

const themes: Record<string, Record<string, string>> = {}

themes.Default = cssToJson(fs.readFileSync(resolve(__dirname, '../base.css'), 'utf-8'))

for (const path of fg.sync('themes/*.css', { cwd: resolve(__dirname, '..'), absolute: true })) {
  const name = parse(path).name
  themes[capitalCase(name)] = cssToJson(fs.readFileSync(path, 'utf-8'))
}

fs.writeFileSync(resolve(__dirname, 'src/store/themes.json'), `${JSON.stringify(themes, null, 2)}\n`, 'utf-8')
