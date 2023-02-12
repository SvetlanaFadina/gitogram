<!-- eslint-disable no-unreachable -->
<template>
  <div class="x-container">
    <div class="c-topline">
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
                        <user :avatar="user.avatar_url" class="userInfo-icon24" ></user>
                    </button>
                    <button class="icon_ref" @click="$router.push({ name: 'auth' })">
                        <icon class="svg" name="exit"></icon>
                    </button>
                </div>
                </template>
        </topline>
    </div>
    <div class="main">
        <div class="col-1">
          <h2 class="title">My Profile</h2>
          <div class="user">
            <div class="userInfo-icon90">
              <user :avatar="user.avatar_url" />
            </div>
            <div>
              <div class="user-login">{{user?.login}}</div>
              <div class="name">{{user?.name}}</div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h2 class="title repo-title">Repositories <span>{{repos?.length}}</span></h2>
          <ul class="feed_list">
            <li class="feed_item" v-for="star in starred" :key="star.id">
              <feed
                :stars="star.stargazers_count"
                :forks="star.forks_count"
                >
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
      </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { user } from '../../components/user/'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'following',
  components: {
    topline,
    icon,
    user,
    feed,
    card
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch('fetchStarred')
      dispatch('getUser')
    })
    return {
      starred: computed(() => state.starred.data),
      user: computed(() => state.user.data)
    }
  }
}
</script>

<style lang="scss" scoped src="./profile.scss"></style>
