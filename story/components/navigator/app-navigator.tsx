import { defineComponent, getCurrentInstance, inject, onBeforeUnmount, provide, reactive } from 'vue'

interface Route {
  path?: string;
  hash?: string;
  param?: {
    [key: string]: string;
  }
}

const APP_NAVIGATOR_PROVIDER = `@@APP_NAVIGATOR_PROVIDER`

const getRoute = (): Route => {
  let locationHash: string = window.location.hash || ''
  if (locationHash.charAt(0) === '#') {
    locationHash = locationHash.slice(1)
  }
  const [path, hash] = decodeURIComponent(locationHash).split('#')
  return {
    path,
    hash,
  }
}

const useAppNavigator = (props: { defaultpath?: string }) => {
  const currentRoute = getRoute()
  if (!currentRoute.path) {
    currentRoute.path = props.defaultpath
  }
  const state = reactive({
    route: currentRoute,
  })

  const methods = {
    go(path: string) {
      window.location.hash = encodeURIComponent(path)
    },
  }

  const handler = {
    hashChange: () => {
      state.route = getRoute()
    },
  }

  const refer = {
    state,
    methods,
  }

  const ctx = getCurrentInstance() as any
  ctx._refer = refer

  window.addEventListener('hashchange', handler.hashChange)
  onBeforeUnmount(() => {
    window.removeEventListener('hashchange', handler.hashChange)
  })

  provide(APP_NAVIGATOR_PROVIDER, refer)

  return refer
}

export const injectAppNavigator = () => {
  return inject(APP_NAVIGATOR_PROVIDER) as ReturnType<typeof useAppNavigator>
}

export default defineComponent({
  name: 'app-navigator',
  props: {
    defaultpath: String,
  },
  setup(props, setupContext) {
    useAppNavigator(props)
    return () => !!setupContext.slots.default ? setupContext.slots.default() : null
  },
})
