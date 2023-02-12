<template>
    <div class="user">
      <div class="avatar avatar90">
        <avatar
          :avatar="avatar"
          :username="username">
        </avatar>
      </div>
    </div>
  </template>

<script>
import { avatar } from '../../components/avatar'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  components: {
    avatar
  },
  data () {
    return {
      items: []
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./user.scss"></style>
