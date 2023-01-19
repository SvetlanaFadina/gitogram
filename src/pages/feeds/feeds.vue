<template>
    <div class="topline">
        <topline>
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
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username">
                        </story-user-item>
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="feed_mainContent">
        <ul class="feed_list">
            <li class="feed_item">
                <feed>
                    <template #avatar>
                        <avatar username="joshua_l"></avatar>
                    </template>
                    <template #card>
                        <card title="Vue.js" text="JavaScript framework for building interactive web applications ⚡"></card>
                    </template>
                </feed>
            </li>
            <li class="feed_item">
                <feed>
                    <template #avatar>
                        <avatar username="Camille"></avatar>
                    </template>
                    <template #card>
                        <card title="React.js" text="Open source JavaScript library used for designing user interfaces"></card>
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
import stories from './data.json'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
import { avatar } from '../../components/avatar'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline,
    icon,
    StoryUserItem,
    feed,
    card,
    avatar
  },
  data () {
    return {
      stories

    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">
</style>
