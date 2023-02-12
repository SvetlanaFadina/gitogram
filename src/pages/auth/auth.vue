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
      <storyButton class="btn_green auth_btn-green" @click="getCode">
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
import env from '../../../env.js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'auth',
  components: {
    icon,
    storyButton
  },
  methods: {
    async getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status public_repo read:user user:follow')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId, code, clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })

        console.log(token)
      } catch (e) {
      }
    }
  }
}

</script>

<style lang="scss" scoped src="./auth.scss"></style>
