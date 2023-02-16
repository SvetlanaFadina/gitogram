<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="stats">
      <div class="stats_border stats_right">
        <button class="btn likes_btn" @onClick="$emit('like')">
          <div class="icon_pic">
            <icon name="star"></icon>
          </div>
          <div class="likes-text">Star</div>
        </button>
      </div>
      <div class="stats_border">
        <div class="likes-amont">{{ stars }}</div>
      </div>
      <div class="stats_border">
        <button class="btn fork_btn">
          <div class="icon_pic">
            <icon name="fork"></icon>
          </div>
          <div class="fork-text">Fork</div>
        </button>
      </div>
      <div class="stats_border stats_left">
        <div class="fork-amont">{{ forks }}</div>
      </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: {
    stars: {
      type: Number
    },
    forks: {
      type: Number
    }
  },
  emits: ['like']
}
</script>

<style lang="scss" src="./statistics.scss" scoped>

</style>
