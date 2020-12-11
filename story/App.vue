<template>
  <AppNavigator defaultpath="normal/button">
    <article class="app-home">
      <section 
        class="app-header" 
        :style="{
          height: `${HomeConfig.headSize}px`,
        }"
      >
        LanVue-V3
      </section>
      <section 
        class="app-menu"
        :style="{
          width: `${HomeConfig.menuSize}px`,
          top: `${HomeConfig.headSize}px`,
        }"
      >
        <AppMenu />
      </section>
      <section 
        class="app-content"
        :style="{
          paddingTop: `${HomeConfig.headSize + 20}px`,
          paddingLeft: `${HomeConfig.menuSize + 20}px`,
        }"
      >
        <AppNavigatorPage />
      </section>
    </article>
  </AppNavigator>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import AppNavigator from './components/navigator/app-navigator'
import AppNavigatorPage from './components/navigator/app-navigator-page'
import AppMenu from './components/app/app-menu.vue'

const HomeConfig = {
  headSize: 60,
  menuSize: 300,
}

export default defineComponent({
  name: 'App',
  components: {
    AppNavigator,
    AppNavigatorPage,
    AppMenu,
  },
  data() {
    return {
      HomeConfig,
    }
  },
})
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
.app-home {
  .app-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
  }
  .app-menu {
    position: fixed;
    left: 0;
    bottom: 0;
    border-right: 1px solid #f2f2f2;
    background-color: #fff;
  }
  .app-content {
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
