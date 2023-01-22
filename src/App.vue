<template>
  <feeds />
  <story-page></story-page>
</template>

<script>
import { feeds } from './pages/feeds'
import { storyPage } from './pages/storyPage'

export default {
  name: 'App',
  components: {
    feeds,
    storyPage
  }
}
</script>

<style lang="scss" src="./global.scss"></style>
