import { computed, ref } from 'vue';
import { designComponent } from '../../use/designComponent'
import './input.scss'

console.log('input loaded')

export default designComponent({
  name: 'lan-input',
  props: {
    status: {
      type: String,
      default: 'primary',
    },
  },
  setup(props) {
    const classes = computed(() => [
      `lan-input`,
      `lan-input-status-${props.status}`,
    ])

    const modelValue = ref('')
    const inputRef = ref(null as null | HTMLInputElement)
    const methods = {
      focus: (flag: boolean) => {
        inputRef.value?.focus()
        if (flag) {
          modelValue.value = ''
        }
      },
      clear: () => {
        modelValue.value = ''
      },
    }
    return {
      refer: {
        methods,
      },
      render: () => {
        return (
          <div class={classes.value}>
            <input
              type='text'
              class='lan-input-inner'
              v-model={modelValue.value}
              ref={inputRef}
            />
            <button onClick={methods.clear}>clear</button>
            <button onClick={() => methods.focus(true)}>focus</button>
          </div>
        )
      },
    }
  },
})
