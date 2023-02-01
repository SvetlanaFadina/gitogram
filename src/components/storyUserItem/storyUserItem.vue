<template>
    <button class="c-story-user-item" @click="$emit('storyPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="username avatar">
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  emits: ['storyPress']
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>
