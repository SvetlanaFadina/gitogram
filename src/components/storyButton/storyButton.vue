<template>
        <button @click="$emit('click')" :class="[{loading, disabled},[ 'btn', 'btn_green'],
          {'hover-text': withHoverText}
        ]"
        :data-hover-text="hoverText">
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
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
