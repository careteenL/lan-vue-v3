<template>
  <div>
    <section>
      UMD
    </section>
    <div>
      <h4>HTML</h4>
      <pre>
        {{umdHtmlCode}}
      </pre>
    </div>
    <div>
      <h4>JS</h4>
      <pre>
        {{umdJsCode}}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'demo-home',
  data() {
    return {
      umdHtmlCode: `
        <h4>Button</h4>
        <div>
          <lan-button>Careteen</lan-button>
        </div>
        <h4>Input</h4>
        <div>
          <lan-input ref="myInput" />
          <button @click="handleOuterFocus">Outer Focus</button>
        </div>
      `,
      umdJsCode: `
        setup() {
          const inputRef = window['@careteen/lan-vue-v3'].Input.use.ref('myInput')
          return {
            handleOuterFocus() {
              inputRef.value.methods.focus(false)
            }
          }
        }
      `
    }
  },
  setup(props) {
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>
