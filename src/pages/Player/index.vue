<template>
  <div>
    <div>
      <div>
        <h2>Info</h2>
      </div>
      <div>
        <div>
          Name: <strong>{{ user.name }}</strong>
        </div>
        <div>
          Account ID: <strong>{{ info.id }}</strong>
        </div>
        <div>
          Title ID: <strong>{{ user.titleId }}</strong>
        </div>
        <div>
          Last Update: <strong>{{ user.updatedAt }}</strong>
        </div>
        <div>
          Created at <strong>{{ user.createdAt }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Player",
  computed: {
    info () {
      return this.$store.getters['getInfo']
    },
    user () {
      return this.$store.getters['getUser']
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
