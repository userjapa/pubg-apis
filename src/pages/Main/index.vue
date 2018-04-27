<template>
  <div>
    <div>
      <h2>Welcome, {{info.type}} {{user.name}}!</h2>
      <ul>
        <li><router-link :to="{ name: 'Player' }">Player Info</router-link></li>
        <li><router-link :to="{ name: 'Matches' }">Matches</router-link></li>
      </ul>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  computed: {
    info () {
      return this.$store.getters['getInfo']
    },
    user () {
      return this.$store.getters['getUser']
    }
  },
  methods: {
    async verifyCredential () {
      if (!this.$store.getters['hasCredentials']) this.$router.replace({ name: `Login` })
      else {
        if (this.$router.currentRoute.name === 'Login')
          this.$router.replace({ name: 'Main' })
        await this.$store.dispatch('login', this.$store.getters['getCredential'])
      }
    }
  },
  watch: {
    '$route': function () {
      this.verifyCredential()
    }
  },
  mounted () {
    this.verifyCredential()
  }
}
</script>
<style lang="scss" scoped>
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
