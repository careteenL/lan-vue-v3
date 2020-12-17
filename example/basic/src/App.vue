<template>
  <h4>Button</h4>
  <DemoButton />
  <h4>Input</h4>
  <DemoInput />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoButton from './components/DemoButton.vue';
import DemoInput from './components/DemoInput.vue';

export default defineComponent({
  name: 'App',
  components: {
    DemoButton,
    DemoInput,
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
