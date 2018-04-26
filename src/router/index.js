import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/Main'
import Login from '../pages/Login'
import Player from '../pages/Player'
import Matches from '../pages/Matches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: `/`,
      name: `Main`,
      component: Main,
      children: [
        {
          path: `player`,
          name: `Player`,
          component: Player
        },
        {
          path: `matches`,
          name: `Matches`,
          component: Matches
        }
      ]
    },
    {
      path: `/login`,
      name: `Login`,
      component: Login
    }
  ]
})
