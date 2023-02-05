<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="c-topline">
        <div class="x-container topline_container">
            <div class="headline">
                <slot name="headline">
                  <user v-for="item in items" :key="item.id">
                    <avatar></avatar>
                  </user>
                </slot>
            </div>
            <div class="content content_black">
                <slot name="content" v-if="$slots.content"></slot>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import * as api from '../../api'
import { user } from '../../components/user/'
import { avatar } from '../../components/avatar'

export default {
  components: {
    user,
    avatar
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      getUser: 'getUser'
    })
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  emits: ['loadContent'],
  async created () {
    try {
      const { data } = await api.user.getUser()
      console.log(data)
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}</script>

<style lang="scss" src="./topline.scss" scoped></style>
