<template>
        <button :class="['btn', 'btn_green',
          {'hover-text': withHoverText}
        ]"
        :data-hover-text="hoverText">
        <span class="btn_text">
          <slot></slot>
        </span>
        </button>
</template>

<script>

// import { spinner } from '../spinner'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  components: {
    // spinner
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'button',
  props: {
    hoverText: {
      type: String
    },
    loading: {
      type: Boolean
    },
    status: {
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
