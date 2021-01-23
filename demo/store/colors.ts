import { reactive, ref, Ref, toRefs, watch } from 'vue'
import { saveAs } from 'file-saver'
import DefaultColors from './default.json'
import { Themes } from './themes'

export const colors = reactive({ ...DefaultColors }) as any
export const theme = ref<keyof typeof Themes>('VitesseLight')

export function resetTheme() {
  Object.assign(colors, DefaultColors)
}

export function applyTheme(name: keyof typeof Themes) {
  Object.assign(colors, DefaultColors, Themes[name])
}

export const colorRefs = Object.entries(toRefs(colors)) as [string, Ref<string>][]

export function getCSS(diff = true) {
  return `:root {\n${
    Object.entries(colors)
      .filter(([key, value]) => !diff || (DefaultColors as any)[key] !== value)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n')
  }\n}`
}

export function download() {
  saveAs(new Blob([getCSS()], { type: 'text/css' }), 'theme-vars.css')
}

watch(theme, applyTheme, { immediate: true })
