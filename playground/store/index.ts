import { reactive, ref, Ref, toRefs, watch } from 'vue'
import { saveAs } from 'file-saver'
import Themes from './themes.json'

export const DefaultColors = Themes.Default
export { Themes }

export const colors = reactive({ ...DefaultColors }) as any
export const theme = ref<keyof typeof Themes>('Vitesse Light')

export function resetTheme() {
  Object.assign(colors, DefaultColors)
}

export function applyTheme(name: keyof typeof Themes) {
  Object.assign(colors, DefaultColors, Themes[name])
}

export const colorRefs = Object.entries(toRefs(colors)) as [string, Ref<string>][]

export function getColorEntries(diff = true) {
  return Object.entries(colors)
    .filter(([key, value]) => !diff || (DefaultColors as any)[key] !== value)
}

export function getJSON(diff = true) {
  return JSON.stringify(Object.fromEntries(getColorEntries(diff)), null, 2)
}

export function getCSS(diff = true) {
  return `:root {\n${
    getColorEntries(diff)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n')
  }\n}`
}

export function downloadCSS() {
  saveAs(new Blob([getCSS()], { type: 'text/css' }), 'theme-vars.css')
}

export function downloadJSON() {
  saveAs(new Blob([getJSON()], { type: 'application/json' }), 'theme-vars.css')
}

watch(theme, applyTheme, { immediate: true })
