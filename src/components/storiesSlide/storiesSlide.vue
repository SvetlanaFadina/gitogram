<template>
    <div :class="['story_item', {active: active}]">
        <div class="container">
        <div class="header">
            <div class="loading_line">
                <loading :active="active" @onFinish="$emit('onProgressFinish')"></loading>
            </div>
            <div class="avatar">
                <avatar
                    :username="data.username"
                    :avatar="data.avatar">
                </avatar>
            </div>
        </div>
        <div class="content">
            <div class="loader" v-if="loading">
                    <spinner></spinner>
                </div>
                <div class="info" v-else>
                    <div v-if="data.content?.length" class="content_text" v-html="data.content"></div>
                        <placeholder v-else></placeholder>
                </div>
        </div>
        <div class="border"></div>
        <div class="slider_button">
          <story-button
            :loading="data.following"
            :theme="data.following ? 'btn_grey' : 'btn_green'"
            @onClick="$emit(data.following ? 'unfollow' : 'follow', data.id)"
      >
        {{data.following ? 'unfollow' : 'follow'}}
        </story-button>
        </div>
    </div>
    <template v-if="active">
    <div class="arrow_btns">
        <button v-if="btnsShown.includes('prev')" class="btn btn_prev" @click="$emit('onPrevSlide')">
            <span class="icon">
                <icon class="btn_icon" name="prevBtn"></icon>
            </span>
            </button>
            <button v-if="btnsShown.includes('next')" class="btn btn_next" @click="$emit('onNextSlide')">
            <span class="icon">
                <icon class="btn_icon" name="nextBtn"></icon>
            </span>
            </button>
        </div>
    </template>
    </div>
</template>

<script>
import { loading } from '../../components/loading'
import { avatar } from '../../components/avatar'
import { storyButton } from '../../components/storyButton'
import { spinner } from '../../components/spinner'
import { placeholder } from '../../components/placeholder'
import { icon } from '../../icons'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    loading,
    avatar,
    storyButton,
    spinner,
    placeholder,
    icon
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings',
      fetchReadMe: 'fetchReadMe',
      fetchStarred: 'fetchStarred',
      starRepo: 'starRepo'
    })
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'follow', 'unfollow']

  // async created () {
  // await this.fetchTrendings
  // }

}

</script>

<style lang="scss" scoped src="./storiesSlide.scss"></style>
