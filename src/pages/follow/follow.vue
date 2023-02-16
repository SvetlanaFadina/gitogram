<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="container">
    <div class="c-topline">
        <topline class="c-topline">
            <template #headline>
              <button class="logo_button" @click="$router.push({ name: 'feeds' })">
                    <icon class="logo_svg" name="gitogram"></icon>
              </button>
                <div class="icons">
                    <button class="icon_ref" @click="$router.push({ name: 'feeds' })">
                        <icon class="svg" name="home"></icon>
                    </button>
                    <button class="icon_ref" @click="$router.push({ name: 'profile' })">
                        <user :avatar="user.avatar_url" class="userInfo-icon24" ></user>
                    </button>
                    <button class="icon_ref" @click="logout">
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
              <div class="user_info">
              <div class="name"><b>{{ user?.public_repos }}</b>  reposts</div>
              <div class="name"><b>{{starred.length}}</b>  <a href="#" class="watchers">watchers</a></div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-2">
            <div class="follow_header">
                <h2 class="title">Following</h2>
          <div class="follow_count" v-text="starred.length"></div>
            </div>
          <ul class="follow_list">
            <li class="follow_item" v-for="star in starred" :key="star.id">
                <div class="follow">
                  <div class="user">
                    <div class="user__avatar">
                      <img
                        :src="star.owner.avatar_url"
                        alt="avatar owner"
                        class="follow__avatar-img"
                      />
                    </div>
                    <div class="user__info">
                      <div class="user__nickname">{{ star.owner.login }}</div>
                      <div class="user__profile">{{ star.owner.type }}</div>
                    </div>
                  </div>
                  <story-button
                  :theme="star.following ? 'btn_grey' : 'btn_green'"
                  @click="star.following ? starRepo(star.id) : unStarRepo(star.id)" class="follow_btn">
                  {{star.following ? 'unfollow' : 'follow'}}
                  </story-button>
                  </div>
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
import { storyButton } from '../../components/storyButton/'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'follow',
  components: {
    topline,
    icon,
    user,
    storyButton
  },
  setup () {
    const { dispatch, state } = useStore()
    const logout = () => {
      dispatch('logout')
    }
    const unStarRepo = (id) => {
      dispatch('unStarRepo', id)
    }
    const starRepo = (id) => {
      dispatch('starRepo', id)
    }
    onMounted(() => {
      dispatch('fetchTrendings')
      dispatch('getUser')
    })
    return {
      starred: computed(() => state.trendings.data),
      user: computed(() => state.user.data),
      logout,
      starRepo,
      unStarRepo
    }
  }
}

</script>

<style lang="scss" scoped src="./follow.scss"></style>
