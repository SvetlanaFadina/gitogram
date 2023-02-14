<template>
        <button :class="[{ 'loading': loading },['btn', 'btn_green', theme],
          {'hover-text': withHoverText}
        ]"
        :disabled="isDisabled"
        :data-hover-text="hoverText"
        @click="$emit('onClick')">
        <template v-if="loading">
          <div class="spinner">
            <spinner></spinner>
          </div>
        </template>
        <template v-else>
          <span class="btn_text"></span>
          <slot></slot>
        </template>
        </button>
</template>

<script>

import { spinner } from '../spinner'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  components: {
    spinner
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'button',
  props: {
    hoverText: {
      type: String
    },
    theme: {
      type: String
    },
    loading: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }

}
</script>

<style lang="scss" scoped src="./storyButton.scss"></style>
