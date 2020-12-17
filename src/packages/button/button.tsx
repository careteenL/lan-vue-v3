import { computed } from 'vue'
import { designComponent } from '../../use/designComponent'
import './button.scss'

console.log('button loaded ...')

export default designComponent({
  name: 'lan-button',
  props: {
    status: {
      type: String,
      default: 'primary',
    },
    label: {
      type: String,
    },
  },
  setup(props, setupContext) {
    const classes = computed(() => [
      'lan-button',
      `lan-button-status-${props.status}`,
    ])
    return {
      render: () => {
        return (
          <button class={classes.value}>
            {setupContext.slots.default ? setupContext.slots.default() : props.label}
          </button>
        )
      },
    }
  },
})
