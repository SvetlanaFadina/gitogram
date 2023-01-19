<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <table class="feed_table">
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
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./statistics.scss" scoped></style>
