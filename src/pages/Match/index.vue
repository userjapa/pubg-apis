<template>
  <div>
    <div>
      <h2>Match</h2>
    </div>
    <div v-if="loaded">
      <div>
        ID: <strong>{{ match.data.id }}</strong>
      </div>
      <div>
        Map: <strong>{{ match.data.attributes.mapName }}</strong>
      </div>
      <div>
        Duration: <strong>{{ match.data.attributes.duration }}</strong>
      </div>
      <div>
        Mode: <strong>{{ match.data.attributes.gameMode }}</strong>
      </div>
      <div>
        Created at <strong>{{ match.data.attributes.createdAt }}</strong>
      </div>
      <div>
        <div>
          <h3>Participants</h3>
        </div>
        <div v-for="player in match.included.filter(x => x.type === 'participant')" class="player">
          <div>
            Name: <strong>{{ player.attributes.stats.name }}</strong>
          </div>
          <div>
            ID: <strong>{{ player.attributes.stats.playerId }}</strong>
          </div>
          <div>
            Down But Not Out: <strong>{{ player.attributes.stats.DBNOs }}</strong>
          </div>
          <div>
            Assistis: <strong>{{ player.attributes.stats.assists }}</strong>
          </div>
          <div>
            Boosts: <strong>{{ player.attributes.stats.boosts }}</strong>
          </div>
          <div>
            Damage Dealt: <strong>{{ player.attributes.stats.damageDealt }}</strong>
          </div>
          <div>
            Death Type: <strong>{{ player.attributes.stats.deathType }}</strong>
          </div>
          <div>
            Heals: <strong>{{ player.attributes.stats.heals }}</strong>
          </div>
          <div>
            Kills: <strong>{{ player.attributes.stats.kills }}</strong>
          </div>
          <div>
            Headshot Kills: <strong>{{ player.attributes.stats.headshotKills }}</strong>
          </div>
          <div>
            Kill Place: <strong>{{ player.attributes.stats.killPlace }}</strong>
          </div>
          <div>
            Kill Points: <strong>{{ player.attributes.stats.killPoints }}</strong>
          </div>
          <div>
            Kill Points Delta: <strong>{{ player.attributes.stats.killPointsDelta }}</strong>
          </div>
          <div>
            Kill Streaks: <strong>{{ player.attributes.stats.killStreaks }}</strong>
          </div>
          <div>
            Last Kill Points: <strong>{{ player.attributes.stats.lastKillPoints }}</strong>
          </div>
          <div>
            Last Win Points: <strong>{{ player.attributes.stats.lastWinPoints }}</strong>
          </div>
          <div>
            Longest Kill: <strong>{{ player.attributes.stats.longestKill }}</strong>
          </div>
          <div>
            Most Damage: <strong>{{ player.attributes.stats.mostDamage }}</strong>
          </div>
          <div>
            Revives: <strong>{{ player.attributes.stats.revives }}</strong>
          </div>
          <div>
            Ride Distance: <strong>{{ player.attributes.stats.rideDistance }}</strong>
          </div>
          <div>
            Road Kills: <strong>{{ player.attributes.stats.roadKills }}</strong>
          </div>
          <div>
            Team Kills: <strong>{{ player.attributes.stats.teamKills }}</strong>
          </div>
          <div>
            Time Survived: <strong>{{ player.attributes.stats.timeSurvived }}</strong>
          </div>
          <div>
            Vehicle Destroys: <strong>{{ player.attributes.stats.vehicleDestroys }}</strong>
          </div>
          <div>
            Walk Distance: <strong>{{ player.attributes.stats.walkDistance }}</strong>
          </div>
          <div>
            Weapons Acquired: <strong>{{ player.attributes.stats.weaponsAcquired }}</strong>
          </div>
          <div>
            Win Place: <strong>{{ player.attributes.stats.winPlace }}</strong>
          </div>
          <div>
            Win Points: <strong>{{ player.attributes.stats.winPoints }}</strong>
          </div>
          <div>
            Win Points Delta: <strong>{{ player.attributes.stats.winPointsDelta }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Match",
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    match () {
      return this.$store.getters['getMatch']
    }
  },
  methods: {
    getStats (player) {
      if (player.attributes.stats) return player.attributes.stats
      else return {}
    }
  },
  async beforeMount () {
    const id = this.$router.currentRoute.params.id
    await this.$store.dispatch('getMatch', id)
    this.loaded = true
  }
}
</script>
<style lang="scss" scoped>
.player {
  padding: 15px;
  border-top: 2px solid #d6d6d6
}
</style>
