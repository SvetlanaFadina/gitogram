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
                    <a href="#" class="icon_ref">
                        <icon class="svg" name="photo"></icon>
                    </a>
                    <a href="#" class="icon_ref">
                        <icon class="svg" name="exit"></icon>
                    </a>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="item in items" :key="item.id">
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
            <li class="feed_item" v-for="item in items" :key="item.id">
                <feed
                :username="item.name"
                :stars="item.stargazers_count"
                :forks="item.forks_count"
                :avatar="item.owner.avatar_url">
                    <template #card>
                        <card
                        :description="item.description"
                        :username="item.owner.login"
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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed,
    card
  },
  data () {
    return {
      items: []
    }
  },
  props: {
    initialSlideId: {
      type: Number,
      required: true
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
      fetchReadMe: 'fetchReadMe'
    })
  },
  async created () {
    try {
      await this.fetchTrendins()
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
