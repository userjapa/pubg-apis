<template>
  <div>
    <form v-on:submit.prevent="login(user)" ref="login_form">
      <div>
        <label for="user_name">User Name</label>
        <input type="text" v-model="user.name" required>
      </div>
      <div>
        <label for="user_api_key">API Key</label>
        <input type="text" v-model="user.api_key" required>
      </div>
      <div>
        <button type="submit" :disabled="!formIsValid(user)">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data () {
    return {
      user: {
        'name': ``,
        'api_key': ``
      }
    }
  },
  methods: {
    async login (user) {
      await this.$store.dispatch('login', user)
    },
    formIsValid (user) {
      if (user.name.length <= 6 || user.api_key.length < 20) return false
      else return true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
