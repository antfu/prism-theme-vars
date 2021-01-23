import fs from 'fs'

const match = fs.readFileSync('base.css', 'utf-8').match(/:root {([\s\S\n]*?)}/m)

const object = Object.fromEntries(match![1].split('\n').map(i => i.trim().slice(0, -1).split(': ')))

fs.writeFileSync('demo/store/default.json', `${JSON.stringify(object, null, 2)}\n`, 'utf-8')
