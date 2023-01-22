import storyButton from './storyButton.vue'

export default {
  title: 'storyButton',
  component: { storyButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }

}

const template = (args) => ({
  components: { xButton: storyButton },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args"></x-button>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow'
}
