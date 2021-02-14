declare module '*.md' {
  import { defineComponent } from 'vue'

  const Component: ReturnType<typeof defineComponent>
  export default Component
}
