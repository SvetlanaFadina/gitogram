import loading from './loading.vue'

export default {
  title: 'loading',
  component: { loading },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'stats when progress reaches the end'
    }
  }

}

const template = (args) => ({
  components: { xLoading: loading },
  data () {
    return { args }
  },
  template: `
    <x-loading @onFinish="args.onFinish"></x-loading>
  `
})

export const Default = template.bind({})
