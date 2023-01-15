<template>
    <div class="c-comment">
        <p>
            <span class='username'>{{ username }}</span>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
