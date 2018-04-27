<template>
  <div>
    <div>
      <h2>Matches</h2>
    </div>
    <div>
      <div v-for="match in matches" @click="$router.push({ name: 'Match', params: { id: match.id } })">
        Match: <strong>{{ match.id }}</strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Matches",
  computed: {
    matches () {
      return this.$store.getters['getMatches']
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
