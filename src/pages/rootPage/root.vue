<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="auth">
    <div class="auth_logo">
      <icon class="auth_logo-svg" name="gitogram"></icon>
    </div>
    <div class="auth_text">
      <p>More than just one repository. <br>This is our digital world.</p>
    </div>
    <div class="auth_btn">
      <storyButton class="btn_green auth_btn-green" @click="getUser">
        <span class="btn_text">
          <p class="auth_btn-text">Authorize with github</p>
          <icon name="ghIcon"></icon>
        </span>
      </storyButton>
    </div>
    <div class="pic">
      <icon class="auth_pic-svg" name="screen"></icon>
    </div>
    <div class="footer">
      <p>© Gitogram from Loftschool</p>
    </div>
  </div>
 </template>

<script>
import { icon } from '../../icons'
import { storyButton } from '../../components/storyButton'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'root',
  components: {
    icon,
    storyButton
  },
  methods: {
    async getUser () {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json()

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./root.scss"></style>
