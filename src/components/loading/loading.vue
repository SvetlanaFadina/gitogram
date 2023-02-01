<template>
    <div :class={active} class="loading">
      <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: 'loading',
  data () {

  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    if (this.active === true) {
      setTimeout(() => {
      }, 500)
    }

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }

}
</script>

<style lang="scss" scoped src="./loading.scss"></style>
