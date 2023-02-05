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
                        <user :avatar="user.avatar_url"  class="feed_userInfo-icon-user" ></user>
                    </button>
                    <button class="icon_ref" @click="logout">
                        <icon class="svg" name="exit"></icon>
                    </button>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="star in stars" :key="star.id">
                        <story-user-item
                            :avatar="star.owner.avatar_url"
                            :username="star.owner.login"
                            @storyPress="$router.push({ name: 'stories', params: { initialSlideId : star.id } })">
                        </story-user-item>
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="feed_mainContent">
        <ul class="feed_list">
            <li class="feed_item" v-for="star in stars" :key="star.id">
                <feed
                :username="star.owner.login"
                :stars="star.stargazers_count"
                :forks="star.forks_count"
                :avatar ="star.owner.avatar_url"
                :loading="issues?.loading"
                @loadContent="loadIssues({ id, owner: owner.login, repo: name })">
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
import * as api from '../../api'
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
      items: [],
      user: [],
      stars: []
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
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendins: 'fetchTrendings',
      fetchReadMe: 'fetchReadMe',
      getUser: 'getUser',
      fetchIssues: 'fetchIssues',
      logout: 'logout',
      fetchStarred: 'fetchStarred'
    }),
    loadIssues ({ id, owner, repo }) {
      const { issues } = this.fetchIssues({ id, owner, repo })
      console.log(issues)
    }
  },
  async created () {
    try {
      await this.fetchTrendins()
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
      const user = await api.user.getUser()
      this.user = user.data
      const stars = await api.starred.getStarredRepos()
      this.stars = stars.data
      console.log(stars)
      this.items = data.items
      await this.fetchIssues()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
