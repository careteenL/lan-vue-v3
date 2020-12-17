import { App, Plugin } from 'vue'

export function installPlugins<T extends { name: string }>(
  Component: T,
  plugins?: Plugin[],
) {
  return {
    ...Component,
    install(app: App) {
      app.component(Component.name, Component)
      if (plugins) {
        plugins.forEach(app.use)
      }
    },
  }
}
