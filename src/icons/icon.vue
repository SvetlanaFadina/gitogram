<template>
    <component :is="name"></component>
</template>

<script>
import * as icons from './variants'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }

  }

}
</script>
