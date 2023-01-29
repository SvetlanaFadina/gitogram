<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="textarea">
        <input class="textarea_input" type="textarea">
    </div>
    <div class="placeholder">
        <input class="placeholder_input" type="placeholder">
        <input class="placeholder_input input2" type="placeholder">
        <input class="placeholder_input input3" type="placeholder">
    </div>
    <div class="placeholder">
        <input class="placeholder_input" type="placeholder">
        <input class="placeholder_input input2" type="placeholder">
        <input class="placeholder_input input3" type="placeholder">
    </div>
</template>

<script>
export default {
  data () {
    return {
      paragraphs: '<input class="placeholder_input" type="placeholder">'
    }
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss"></style>
