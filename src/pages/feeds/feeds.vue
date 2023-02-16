<template>
    <div class="topline">
        <topline class="c-topline">
            <template #headline>
                <div class="logo">
                    <icon class="logo_svg" name="gitogram"></icon>
                </div>
                <div class="icons">
                    <a href="#" class="icon_ref">
                        <icon class="svg" name="home"></icon>
                    </a>
                    <button class="icon_ref">
                        <user :avatar="user.avatar_url"  class="userInfo-icon24" @click="$router.push({ name: 'profile' })"></user>
                    </button>
                    <button class="icon_ref" @click="logout">
                        <icon class="svg" name="exit"></icon>
                    </button>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="item in trendings" :key="item.id">
                        <story-user-item
                            :avatar="item.owner.avatar_url"
                            :username="item.owner.login"
                            @storyPress="$router.push({ name: 'stories', params: { initialSlideId : item.id } })">
                        </story-user-item>
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="feed_mainContent">
        <ul class="feed_list">
            <li class="feed_item" v-for="star in starred" :key="star.id">
                <feed
                :username="star.owner.login"
                :stars="star.stargazers_count"
                :forks="star.forks_count"
                :avatar ="star.owner.avatar_url"
                :loading="star.issues?.loading"
                @loadContent="fetchIssues({ id: star.owner.id, owner: star.owner.login, repo: star.name })"
                @like="handleLike">
                    <template #card>
                        <card
                        :description="star.description"
                        :username="star.owner.login"
                        ></card>
                    </template>
                </feed>
            </li>
        </ul>
    </div>
</template>

<script>
import StoryUserItem from '@/components/storyUserItem/storyUserItem.vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
import { mapActions, mapState } from 'vuex'
import { user } from '../../components/user/'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed,
    card,
    user
  },
  data () {
    return {
      items: []
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
    initialSlideId: {
      type: Number,
      required: true
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      starred: state => state.starred.data,
      user: state => state.user.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchReadMe: 'fetchReadMe',
      getUser: 'getUser',
      fetchIssues: 'fetchIssues',
      logout: 'logout',
      fetchStarred: 'fetchStarred'
    }),
    handleLike () {
      console.log('like')
    }
  },
  async created () {
    try {
      await this.getUser()
      await this.fetchTrendings()
      await this.fetchStarred()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
