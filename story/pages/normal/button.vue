<template>
  <div class="demo-button">
    <h4>基础</h4>
    <lan-button label="Careteen" />
    <lan-button>
      Lan
    </lan-button>
    <h4>状态</h4>
    <lan-button
      v-for="item in statusList"
      :key="item"
      :status="item"
    >
      {{item}}
    </lan-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'demo-button',
  data() {
    return {
      statusList: ['primay', 'success', 'warn', 'error', 'info']
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-button {
  .lan-button {
    margin-right: 10px;
  }
}
</style>