import storyPage from './storyPage.vue'

export default {
  title: 'storyPage',
  component: { storyPage }
}

const template = () => ({
  components: { storyPage },
  template: `
      <story-page></story-page>
    `
})

export const Default = template.bind({})
