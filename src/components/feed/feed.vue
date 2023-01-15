<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="c-feed">
        <div class="x-container feed_container">
            <slot name="card">
                <card></card>
            </slot>
                <div class="feed_reactions">
                    <table>
                        <tr>
                            <th class="th_star">
                                <button class="btn likes_btn">
                                    <div class="icon_pic">
                                        <icon name="star"></icon>
                                    </div>
                                    <div class="likes-text">Star</div>
                                </button>
                            </th>
                            <th class="th_likes">
                                <div class="likes-amont">156k</div>
                            </th>
                            <th class="th_fork">
                                <button class="btn fork_btn">
                                    <div class="icon_pic">
                                        <icon name="fork"></icon>
                                    </div>
                                    <div class="fork-text">Fork</div>
                                </button>
                            </th>
                            <th class="th_amount">
                                <div class="fork-amont">4</div>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
import { icon } from '../../icons'
import { card } from '../card'

export default {
  components: {
    icon,
    card
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss">

</style>
