<template>
  <div class="demo-input">
    <h4>基础</h4>
    <lan-input />
    <h4>状态</h4>
    <lan-input
      v-for="item in statusList"
      :key="item"
      :status="item"
    />
    <h4>Ref</h4>
    <lan-input ref="myInput"/>
    <button @click="handleOuterClear">outer clear</button>
    <button @click="handleOuterFocus">outer foucs</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Input } from '../../../src'

export default defineComponent({
  name: 'demo-input',
  data() {
    return {
      statusList: ['primary', 'success', 'warn', 'error', 'info']
    }
  },
  setup() {
    const inputRef = Input.use.ref('myInput')
    return {
      handleOuterClear: () => {
        inputRef.value?.methods.clear()
      },
      handleOuterFocus: () => {
        inputRef.value?.methods.focus(false)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-input {
  .lan-input {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>