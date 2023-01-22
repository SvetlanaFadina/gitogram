<template>
    <div class="card">
        <div class="title">
            <h1 class="card_username">{{ username }}</h1>
            <h2 class="card_title">{{ title }}</h2>
        </div>
        <div class="card_text">
            <p>{{ text }}</p>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    username: String,
    description: String
  }
}</script>

<style lang="scss" src="./card.scss" scoped></style>
