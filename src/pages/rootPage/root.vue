<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1>Root page</h1>
    <button @click="getUser">GetUser</button>
 </template>

<script>
export default {
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
