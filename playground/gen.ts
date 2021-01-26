import fs from 'fs'
import { parse } from 'path'
import {
  capitalCase,
} from 'change-case'
import fg from 'fast-glob'

function cssToJson(css: string): Record<string, string> {
  const match = css.match(/:root {([\s\S\n]*?)}/m)

  const object = Object.fromEntries(match![1].split('\n').map(i => i.trim().slice(0, -1).split(': ')))
  return object
}

const themes: Record<string, Record<string, string>> = {}

themes.Default = cssToJson(fs.readFileSync('base.css', 'utf-8'))

for (const path of fg.sync('themes/*.css')) {
  const name = parse(path).name
  themes[capitalCase(name)] = cssToJson(fs.readFileSync(path, 'utf-8'))
}

fs.writeFileSync('playground/store/themes.json', `${JSON.stringify(themes, null, 2)}\n`, 'utf-8')
