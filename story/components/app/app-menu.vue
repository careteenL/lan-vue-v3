<template>
  <div class="app-menu-list">
    <ul>
      <li
        v-for="menuGroup in menus"
        :key="menuGroup.name"
      >
        <div class="app-menu-group-name">
          <span>{{menuGroup.name}}</span>
        </div>
        <ul>
          <li
            v-for="menu in menuGroup.children"
            :key="menu.page"
            @click="handleClickMenu(menu)"
            :class="{
              'app-menu-active': currentPath === menu.page
            }"
          >
            <div class="app-menu-name">
              <span>{{menu.name}}</span>
              <span>{{menu.title}}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { injectAppNavigator } from '../navigator/app-navigator'
import { AppMenu, MENUS } from './menus'

export default {
  name: 'app-menu',
  // props: {
  //   currentPath: { type: String },
  // },
  setup() {
    const currentPath = ref('')
    const navigator = injectAppNavigator()
    watch(
      () => navigator?.state.route.path,
      (newV) => {
        currentPath.value = newV || ''
      }
    )

    return {
      currentPath,
      menus: MENUS,
      handleClickMenu(menu: AppMenu) {
        navigator.methods.go(menu.page)
      },
    }
  },
}
</script>

<style lang="scss">
.app-menu-list {
  height: 100%;
  overflow: auto;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    .app-menu-name,
    .app-menu-group-name {
      font-size: 14px;
      padding: 10px 24px 12px 32px;
      white-space: nowrap;
      color: #333;
      cursor: pointer;
      transition: all 300ms linear;
      &:hover {
        background-color: rgba(#e43, 0.1);
        color: #e43;
      }
    }
    .app-menu-name {
      position: relative;
      & > span {
        &:nth-child(2) {
          font-size: 12px;
          margin-left: 0.5em;
          color: #ccc;
        }
      }
    }
    .app-menu-group-name {
      padding-left: 24px;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
      color: #e43;
    }
    .app-menu-active {
      .app-menu-name {
        color: #e43;
      }
    }
  }
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -30px;
    width: 30px;
    content: "";
    box-shadow: inset 10px 0 8px -8px #f0f1f2;
  }
}
</style>