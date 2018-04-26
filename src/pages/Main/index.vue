<template>
  <div>
    <div>
      <h2>Welcome!</h2>
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
  name: "Main"
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
