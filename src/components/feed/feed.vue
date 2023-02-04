<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="c-feed">
      <div class="feed_user">
          <div class="feed_avatar">
              <avatar :username="username" :avatar="avatar"></avatar>
          </div>
      </div>
      <div class="x-container feed_container">
          <slot name="card">
              <card></card>
          </slot>
          <div class="feed_reactions">
              <statistics :stars="stars" :forks="forks"></statistics>
          </div>
      </div>
      <div class="feed_comment-block">
          <toggler @onToggle="toggle"></toggler>
          <div class="feed_comments" v-if="shown">
              <ul class="feed_comment-list">
                  <li class="feed_comment-item" v-for="user in users" :key="user.id">
                      <comment
                              :username="user.username"
                              :text="user.text">
                      </comment>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { card } from '../card'
import { statistics } from '../statistics'
import { toggler } from '../../components/toggler/'
import users from '../../pages/feeds/users.json'
import { comment } from '../comment/'
import { avatar } from '../avatar'
export default {
  components: {
    card,
    statistics,
    toggler,
    comment,
    avatar
  },
  data () {
    return {
      shown: false,
      users,
      items: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    stars: {
      type: Number
    },
    forks: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss">
</style>
