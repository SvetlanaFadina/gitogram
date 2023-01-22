<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="story-page_container">
        <div class="story-page_header">
            <div class="c-loading">
                <loading></loading>
            </div>
            <div class="story_avatar">
                <avatar username="React.reposit" avatar="https://i.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g"></avatar>
            </div>
        </div>
        <div class="story-page_content">
            <ul class="story_list">
                <li class="story_item" v-for="item in items" :key="item.id">
                <card
                :title="item.name"
                :description="item.description"
                :username="item.owner.login"
                :stars="item.stargazers_count">
                </card></li>
            </ul>
        </div>
        <div class="story_button">
            <story-button hover-text="Unfollow"></story-button>
        </div>
</div>
</template>

<script>
import * as api from '../../api'
import { loading } from '../../components/loading'
import { avatar } from '../../components/avatar'
import { storyButton } from '../../components/storyButton'
import { card } from '../../components/card'

export default {
  components: {
    loading,
    avatar,
    storyButton,
    card

  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss" scoped src="./storyPage.scss"></style>
