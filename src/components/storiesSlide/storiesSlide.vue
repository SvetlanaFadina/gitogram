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
        <story-button :loading="data.following.loading" @click="$emit('onFollow', data.id)" class="slider_btn" hover-text="Unfollow"></story-button>
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
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    hoverText: {
      type: String
    },
    active: Boolean,
    loading: Boolean,
    content: {
      type: String
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    }
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow']

}

</script>

<style lang="scss" scoped src="./storiesSlide.scss"></style>
