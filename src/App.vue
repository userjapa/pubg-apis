<template>
  <div id="app">
    <div>
      <h1>PUBG APIs</h1>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    verifyCredential () {
      if (!this.$store.getters['hasCredentials']) this.$router.replace({ name: `Login` })
      else {
        if (this.$router.currentRoute.name === 'Login')
          this.$router.replace({ name: 'Main' })
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}
</style>
