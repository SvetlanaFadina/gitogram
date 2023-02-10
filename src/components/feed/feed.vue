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
          <div class="loader" v-if="loading">
            <iLoader></iLoader>
          </div>
          <div class="feed_comments" v-if="starred?.length && shown">
              <ul class="feed_comment-list">
                  <li class="feed_comment-item" v-for="issue in starred" :key="issue.id">
                      <comment
                              :username="issue.owner.login"
                              :text="issue.name">
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
import { iLoader } from '../../components/iLoader'
import { mapActions, mapState } from 'vuex'
// import { getIssues } from '@/api/rest/issues'

export default {
  components: {
    card,
    statistics,
    toggler,
    comment,
    avatar,
    iLoader
  },
  data () {
    return {
      shown: false,
      users,
      items: [],
      id: []
    }
  },
  computed: {
    ...mapState({
      starred: state => state.starred.data
    })
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.starred.length === 0) {
        this.$emit('loadContent')
      }
    },
    ...mapActions({
      fetchIssues: 'fetchIssues'
    })
  },
  props: {
    loading: {
      type: Boolean
    },
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
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  emits: ['loadContent', 'like']
}
</script>

<style lang="scss" scoped src="./feed.scss">
</style>
