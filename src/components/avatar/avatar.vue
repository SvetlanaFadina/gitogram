<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="feed_userInfo">
                <img :src="avatar" class="feed_userInfo-icon">
                <h2 class="feed_userInfo-name">{{ username }}</h2>
            </div>
</template>

<script>

export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}

</script>
