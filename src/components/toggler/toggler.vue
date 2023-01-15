<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button :class="['button', { active: isOpened }]" @click="toggle">
        <span class="text">{{ isOpened ? "Hide issues" : "Show issues" }}</span>
        <span class="icon">
            <icon name="triangle"></icon>
        </span>
    </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" src="./toggler.scss" scoped></style>
