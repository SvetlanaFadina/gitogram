<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card">
        <div class="title">
            <h2 class="card_title">{{ title }}</h2>
        </div>
        <div class="card_text">
            <p>{{ text }}</p>
        </div>
        <div class="rates"></div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}</script>

<style lang="scss" src="./card.scss" scoped></style>
