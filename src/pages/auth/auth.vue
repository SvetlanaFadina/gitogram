<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button @click="getCode">Enter</button>
 </template>

<script>
const clientId = '595eb40ae8f0978515a8'
const clientSecret = '5481c4b1e52b6f4a525950ddd88b26edece636cd'

export default {
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()

      params.append('client_id', clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
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
              clientId, code, clientSecret
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
}
</script>
