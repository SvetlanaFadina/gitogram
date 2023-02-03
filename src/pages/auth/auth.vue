<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button @click="getCode">Enter</button>
 </template>

<script>
import axios from 'axios'

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
      const code = new URLSearchParams(window.location.search).get('code')
      if (code) {
        try {
          const url = 'https://webdev-api.loftschool.com/github'
          const options = {
            method: 'POST',
            url: url,
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              clientId, code, clientSecret
            }
          }
          const response = axios(options)
          console.log(response)
          const { token } = response.json()
          console.log(token)
          localStorage.setItem('token', token)
          this.$router.replace({ name: 'feeds' })

          console.log(token)
        } catch (e) {
          console.log(e)
        }
      }
    }

  }
}

</script>
