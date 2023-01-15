<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <h1>Gitogram/</h1>
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
        <div class="feed_user">
        <icon class="svg feed_svg" name="avatar1"></icon>
        <avatar username="John"></avatar>
        </div>
            <feed>
                <template #card>
                    <card title="Vue.js" text="JavaScript framework for building interactive web applications ⚡"></card>
                </template>
            </feed>
            <div class="feed_comment-block">
                <toggler @onToggle="toggle"></toggler>
                <div class="feed_comments" v-if="shown">
                    <ul class="feed_comment-list">
                        <li class="feed_comment-item" v-for="user in users" :key="user.id">
                            <comment
                                :username="user.username"
                                :text="user.text"></comment>
                        </li>
                    </ul>
                </div>
                <div class="feed_date">15 May</div>
            </div>
        </div>
        <div class="feed_mainContent">
            <div class="feed_user">
        <icon class="svg feed_svg" name="avatar2"></icon>
        <avatar username="Camille"></avatar>
        </div>
            <feed>
                <template #card>
                    <card title="React.js" text="Open source JavaScript library used for designing user interfaces"></card>
                </template>
            </feed>
            <div class="feed_comment-block">
                <toggler @onToggle="toggle"></toggler>
                <div class="feed_comments" v-if="shown">
                    <ul class="feed_comment-list">
                        <li class="feed_comment-item" v-for="user in users" :key="user.id">
                            <comment
                                :username="user.username"
                                :text="user.text"></comment>
                        </li>
                    </ul>
                </div>
                <div class="feed_date">15 May</div>
            </div>
        </div>
</template>

<script>
import StoryUserItem from '@/components/storyUserItem/storyUserItem.vue'
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import stories from './data.json'
import { feed } from '../../components/feed'
import { comment } from '../../components/comment'
import { toggler } from '../../components/toggler/'
import users from './users.json'
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
    comment,
    toggler,
    card,
    avatar
  },
  data () {
    return {
      shown: false,
      stories,
      users

    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">
</style>
