<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="c-feed">
        <div class="feed_user">
            <icon class="svg feed_svg" name="avatar1"></icon>
            <div class="feed_avatar">
                <avatar>{{ username }}</avatar>
            </div>
        </div>
        <div class="x-container feed_container">
            <slot name="card">
                <card></card>
            </slot>
                <div class="feed_reactions">
                    <statistics></statistics>
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
import { icon } from '../../icons/'
import { toggler } from '../../components/toggler/'
import users from '../../pages/feeds/users.json'
import { comment } from '../comment/'

export default {
  components: {
    card,
    statistics,
    icon,
    toggler,
    comment
  },
  data () {
    return {
      shown: false,
      users
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
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss">

</style>
