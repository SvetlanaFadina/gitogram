<template>
  <div class="wrapper wrapper_storyPage">
    <topline class="c-topline_black">
      <template #headline>
        <button class="logo_button" @click="$router.push('/#')">
          <icon class="logo_svg" name="gitogramWhite"></icon>
        </button>
        <button class="logo_button" @click="$router.push('/#')">
          <icon class="cross_svg" name="cross"></icon>
        </button>
      </template>
    </topline>
    <div class="stories_container">
    <div class="stories">
     <ul class="stories_list" ref="slider">
      <li class="stories_item" v-for="trending, ndx in trendings" :key="trending.id" ref="item">
        <stories-slider
        :data="getStoryData(trending)"
        :active="ndx === index"
        :loading="ndx === index && loading"
        :btnsShown="activeBtns"
        @onNextSlide="handleSlide(ndx + 1)"
        @onPrevSlide="handleSlide(ndx - 1)"
        :initialSlide="Number($route.params.initialSlide)">
      </stories-slider>
      </li>
     </ul>
    </div>
  </div>
  </div>
</template>

<script>

import { icon } from '../../icons/'
import { storiesSlider } from '../../components/storiesSlider'
import { mapActions, mapState } from 'vuex'
import { topline } from '../../components/topline/'

export default {
  name: 'storyPage',
  components: {
    icon,
    storiesSlider,
    topline
  },
  data () {
    return {
      index: 0,
      sliderPosition: 0,
      btnsShown: true,
      loading: false
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.index === 0) return ['next']
      if (this.index === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendins: 'fetchTrendings',
      fetchReadMe: 'fetchReadMe'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.index]
      await this.fetchReadMe({ id, owner: owner.login, repo: name })
    },
    moveSlide (slideNum) {
      const { item, slider } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[0]).getPropertyValue('width'), 10)
      this.index = slideNum
      this.sliderPosition = -(slideWidth * slideNum)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.btnsShown = false
      this.loading = true
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
      } finally {
        this.btnsShown = true
        this.loading = false
      }
    },
    async handleSlide (slideNum) {
      this.moveSlide(slideNum)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlideId) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlideId)
      await this.handleSlide(ndx)
    }

    await this.fetchTrendins()
    await this.loadReadme()
  }
}
</script>

<style lang="scss" src="./storyPage.scss" scoped></style>
